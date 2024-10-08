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
      apiKey: "AIzaSyAVdTEy-LuaPh_wmBnhOwnc7BOuARbPmrg",
      authDomain: "pluto-1e8b6.firebaseapp.com",
      projectId: "pluto-1e8b6",
      storageBucket: "pluto-1e8b6.appspot.com",
      messagingSenderId: "960588306318",
      appId: "1:960588306318:web:2bf6c45a5252737d7436df"
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
