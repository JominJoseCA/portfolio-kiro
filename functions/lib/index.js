"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
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
    }
    catch (error) {
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
        const contacts = snapshot.docs.map(doc => {
            var _a, _b, _c;
            return (Object.assign(Object.assign({ id: doc.id }, doc.data()), { createdAt: ((_c = (_b = (_a = doc.data().createdAt) === null || _a === void 0 ? void 0 : _a.toDate) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.toISOString()) || null }));
        });
        res.json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    }
    catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Update contact status
app.patch('/contacts/:id/status', async (req, res) => {
    var _a, _b, _c, _d;
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
        const updatedData = Object.assign(Object.assign({ id: updatedDoc.id }, updatedDoc.data()), { createdAt: ((_d = (_c = (_b = (_a = updatedDoc.data()) === null || _a === void 0 ? void 0 : _a.createdAt) === null || _b === void 0 ? void 0 : _b.toDate) === null || _c === void 0 ? void 0 : _c.call(_b)) === null || _d === void 0 ? void 0 : _d.toISOString()) || null });
        return res.json({
            success: true,
            message: 'Contact status updated',
            data: updatedData
        });
    }
    catch (error) {
        console.error('Update contact status error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map