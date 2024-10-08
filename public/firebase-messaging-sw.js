// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

// Initialize app
const app = firebase.initializeApp({
     apiKey: "AIzaSyBgYF4-4YnJC8NK-8CPIkGD_zqAK9_Wtnw",
  authDomain: "enab-app.firebaseapp.com",
  projectId: "enab-app",
  storageBucket: "enab-app.appspot.com",
  messagingSenderId: "350712814948",
  appId: "1:350712814948:web:6d23a2b90a6e74f70aee71",
  measurementId: "G-VRW1XCKRB7"
})

// Initialize messaging
const messaging = firebase.messaging()

// Listen to bg messages
messaging.onBackgroundMessage(payload => {
  console.log("Received a bg message: ", payload);


  const title = payload.notification.title
  const notification = {
    body: "Notification Body",
    icon: "/icon.png"
  }

  // Show notification when message received
  self.registration.showNotification(title, notification);
})

