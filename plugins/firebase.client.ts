import { initializeApp, getApps } from 'firebase/app'
import { getMessaging, onMessage, type Messaging } from 'firebase/messaging'

declare module '#app' {
  interface NuxtApp {
    $messaging: Messaging
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $messaging: Messaging
  }
}

export default defineNuxtPlugin(() => {
  const app =
    getApps()[0] ??
    initializeApp({
      apiKey: "AIzaSyBOAxdoXqLCrEa9p-AECFNz5ACD9uQCab0",
      authDomain: "nestjsnotification-f80c6.firebaseapp.com",
      projectId: "nestjsnotification-f80c6",
      storageBucket: "nestjsnotification-f80c6.firebasestorage.app",
      messagingSenderId: "1011334253244",
      appId: "1:1011334253244:web:23348e91a01a9a781d1eb9"
    });

  const messaging = getMessaging(app)


  // This runs whenever a message is received:
  //   - When the page is open
  //   - When the user clicked the bg notification
  onMessage(messaging, (payload) => {
    alert(JSON.stringify(payload, null, 2))
  })

  return {
    provide: {
      messaging,
    }
  }
})
