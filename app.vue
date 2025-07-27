<script lang="ts" setup>
import { getToken } from 'firebase/messaging'

const messagingToken = ref("");

onMounted(() => {
  requestPermission()
})

function requestPermission() {
  if (!window.Notification) return

  if (window.Notification.permission === 'granted') {
    setToken()
  } else {
    window.Notification.requestPermission((value) => {
      if (value === 'granted') {
        setToken()
      }
    })
  }
}

async function setToken() {
  const { $messaging } = useNuxtApp()
  const token = await getToken($messaging, {
    vapidKey: "BPIJsdjF5fbPEdl86c5evHWDDeXEHp_Q5EcNoAZarMF_2_jweaft66Z_BowvUOFjjW5aDLi9J8Y9Tkd6z71Ir-M"
  })

  // Send token to server, save in user schema
  // but we're just manually doing it
  messagingToken.value = token
}

function copy() {
  navigator.clipboard.writeText(messagingToken.value)
}
</script>

<template>
  <div>{{ messagingToken }}</div>
  <button v-if="messagingToken" @click="copy">Copy to Clipboard</button>
  <button @click="requestPermission">Allow Notifications</button>
</template>
