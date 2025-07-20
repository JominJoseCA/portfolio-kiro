# Firebase Deployment Guide

## Prerequisites

1. **Install Firebase CLI:**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase:**
```bash
firebase login
```

## Setup Firebase Project

1. **Create a new Firebase project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project"
   - Enter project name: `jomin-portfolio` (or your preferred name)
   - Enable Google Analytics (optional)
   - Create project

2. **Enable required services:**
   - **Firestore Database:** Go to Firestore Database → Create database → Start in test mode
   - **Firebase Functions:** Will be enabled automatically when you deploy
   - **Firebase Hosting:** Will be enabled automatically when you deploy

3. **Initialize Firebase in your project:**
```bash
firebase init
```

Select:
- ☑ Firestore: Configure security rules and indexes files
- ☑ Functions: Configure a Cloud Functions directory and its files  
- ☑ Hosting: Configure files for Firebase Hosting

Configuration options:
- **Firestore:** Use existing files (firestore.rules, firestore.indexes.json)
- **Functions:** Use existing directory (functions)
- **Hosting:** 
  - Public directory: `out`
  - Single-page app: `Yes`
  - Set up automatic builds: `No`

## Update Project Configuration

1. **Update `.firebaserc` with your project ID:**
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

2. **Install Functions dependencies:**
```bash
cd functions
npm install
cd ..
```

## Build and Deploy

1. **Build the Next.js application:**
```bash
npm run firebase:build
```

2. **Deploy to Firebase:**
```bash
npm run firebase:deploy
```

Or deploy individually:
```bash
# Deploy only hosting
firebase deploy --only hosting

# Deploy only functions
firebase deploy --only functions

# Deploy only firestore rules
firebase deploy --only firestore
```

## Environment Variables (Optional)

If you need environment variables for your functions:

1. **Set Firebase Functions config:**
```bash
firebase functions:config:set someservice.key="THE API KEY"
```

2. **Access in functions:**
```typescript
const functions = require('firebase-functions');
const key = functions.config().someservice.key;
```

## Local Development with Firebase Emulators

1. **Start Firebase emulators:**
```bash
npm run firebase:serve
```

This will start:
- Hosting emulator: http://localhost:5000
- Functions emulator: http://localhost:5001
- Firestore emulator: http://localhost:8080

2. **For development with hot reload:**
```bash
# Terminal 1: Start Next.js dev server
npm run dev

# Terminal 2: Start Firebase emulators
firebase emulators:start --only functions,firestore
```

## Post-Deployment

1. **Update Firestore security rules** (if needed):
   - Go to Firebase Console → Firestore Database → Rules
   - Update rules for production security

2. **Set up custom domain** (optional):
   - Go to Firebase Console → Hosting
   - Add custom domain

3. **Monitor your application:**
   - Functions logs: `firebase functions:log`
   - Firebase Console for analytics and monitoring

## Troubleshooting

**Common issues:**

1. **Build errors:** Make sure all dependencies are installed
2. **Function deployment errors:** Check Node.js version (should be 18)
3. **Firestore permission errors:** Update firestore.rules for your use case
4. **API not working:** Check that functions are deployed and accessible

**Useful commands:**
```bash
# View deployment status
firebase projects:list

# View function logs
firebase functions:log

# Delete a deployment
firebase hosting:channel:delete CHANNEL_ID
```

## Production Checklist

- [ ] Update Firestore security rules
- [ ] Set up proper error monitoring
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic with Firebase)
- [ ] Test contact form functionality
- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test dark/light mode toggle
- [ ] Verify SEO meta tags

Your portfolio will be available at: `https://your-project-id.web.app`