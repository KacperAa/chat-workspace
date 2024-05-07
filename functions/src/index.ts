/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import * as admin from 'firebase-admin';
import * as logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const cors = require('cors')({ origin: true });
admin.initializeApp();

export const createStreamUser = onRequest((request, response) => {
  cors(request, response, async () => {
    const { user } = request.body;
  });
});
