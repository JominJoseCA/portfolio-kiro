import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Firebase Functions API is running' });
});

// Contact form submission
app.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create new contact entry in Firestore
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'new'
    };

    const docRef = await db.collection('contacts').add(contactData);

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: {
        id: docRef.id,
        name: contactData.name,
        email: contactData.email,
        subject: contactData.subject,
        createdAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get all contacts (for admin purposes)
app.get('/contacts', async (req, res) => {
  try {
    const snapshot = await db.collection('contacts')
      .orderBy('createdAt', 'desc')
      .get();

    const contacts = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || null
    }));

    res.json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Update contact status
app.patch('/contacts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    const docRef = db.collection('contacts').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    await docRef.update({ status });

    const updatedDoc = await docRef.get();
    const updatedData = {
      id: updatedDoc.id,
      ...updatedDoc.data(),
      createdAt: updatedDoc.data()?.createdAt?.toDate?.()?.toISOString() || null
    };

    return res.json({
      success: true,
      message: 'Contact status updated',
      data: updatedData
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Export the Express app as a Firebase Function
export const api = functions.https.onRequest(app);