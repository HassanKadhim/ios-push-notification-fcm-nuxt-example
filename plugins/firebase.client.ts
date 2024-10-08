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
      apiKey: "AIzaSyBgYF4-4YnJC8NK-8CPIkGD_zqAK9_Wtnw",
      authDomain: "enab-app.firebaseapp.com",
      projectId: "enab-app",
      storageBucket: "enab-app.appspot.com",
      messagingSenderId: "350712814948",
      appId: "1:350712814948:web:6d23a2b90a6e74f70aee71",
      measurementId: "G-VRW1XCKRB7",
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
