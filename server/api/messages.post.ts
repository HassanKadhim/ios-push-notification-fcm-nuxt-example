import { initializeApp } from 'firebase-admin/app'
import { getMessaging } from 'firebase-admin/messaging'

import { DB } from './token.post'

export default defineEventHandler(async () => {
  const app = initializeApp()
  const messaging = getMessaging(app)

  // Example payload from POST
  const payload = {
    from: 'id1',
    to: 'id2',
    message: 'test'
  }

  // Get to user

  await messaging.send({
    token: 'fs-DnJloggtVuO5X4cdSS2:APA91bH3fbmVqLlkxGH4-MO1VEqM9LTRexa5CYhOGAbIySNHb8q5YBcutb_WorhvjK2uwjgrsCibvKMgIkN8AT8HvMYr1YB8FI2f234IqkdLFFkA5EnowjK-DkEw-g4kEXRi0VlRPJjE',
    notification: {
      title: "Some Title",
      body: "Some body",
    }
  })


  // list out users
  // loop 100 at a time
  // send notif
  // messaging.sendEachForMulticast({
  //   // LImit to 100
  //   tokens: [],
  //   notification: {}
  // })


  // Send to topic
  // Requires adding to topic with messaging.subscribeToTopic previously
  // messaging.sendToTopic('topic', { notification: {} })
})
