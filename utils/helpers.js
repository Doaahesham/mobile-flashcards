import {AsyncStorage } from 'react-native'
import { Notifications} from 'expo'
 import * as Permissions from 'expo-permissions'
export const DECK_STORAGE_KEY = 'FlashCard:decks'
const NOTIFICATION_KEY = 'FlashCard:notifications'
export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function addNotification () {
  return {
    title: 'Get a Quiz!',
    body: "👋 HI Go to Quiz now!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function localNotification () {
   AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate())
              tomorrow.setHours(8)
              tomorrow.setMinutes(0)
              
              Notifications.scheduleLocalNotificationAsync(
                addNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}