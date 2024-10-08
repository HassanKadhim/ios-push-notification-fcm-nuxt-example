// Import the firebase app / messaging packages
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js')

// Initialize app
const app = firebase.initializeApp({
  apiKey: "AIzaSyAVdTEy-LuaPh_wmBnhOwnc7BOuARbPmrg",
  authDomain: "pluto-1e8b6.firebaseapp.com",
  projectId: "pluto-1e8b6",
  storageBucket: "pluto-1e8b6.appspot.com",
  messagingSenderId: "960588306318",
  appId: "1:960588306318:web:2bf6c45a5252737d7436df"
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

