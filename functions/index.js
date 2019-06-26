
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const nodemailer = require('nodemailer');
const fetch = require("node-fetch");



const firebaseConfig = {
    apiKey: "AIzaSyByk6TU6sTkAJkzfuwm0qpG7PiV5FM15zM",
    authDomain: "toshal-dev.firebaseapp.com",
    databaseURL: "https://toshal-dev.firebaseio.com",
    projectId: "toshal-dev",
    storageBucket: "toshal-dev.appspot.com",
    messagingSenderId: "1053394552177",
    appId: "1:1053394552177:web:2ef1424ecac5f6b1"
  };
admin.initializeApp(firebaseConfig);

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.emailFunction = functions.database.ref('/contact')
    .onCreate(async (snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Message added',JSON.stringify(original));

      let mailOptions = {
        from: '"Toshal.dev contact" <noreply@firebase.com>', // sender address
        to: "toshal1996@gmail.com", // list of receivers
        subject: "toshal.dev Contact", // Subject line
        text: JSON.stringify(original), // plain text body
        html: `<p><b>Name: </b>${original.name}</p>
        <p><b>Email: </b>${original.email}</p>
        <p><b>Time sent: </b>${original.time}</p>
        <p><b>Message: </b>${original.message}</p>`
      }

      try {
        await mailTransport.sendMail(mailOptions);
        console.log('New message send');
      } catch(error) {
        console.error('There was an error while sending the email:', error);
      }
      return null;

    });
