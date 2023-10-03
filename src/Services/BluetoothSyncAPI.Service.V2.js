// Must have a retry mechanism, 3 times when failed. After 3 times, show "Failed to sync data" message to user.
// Store the data from the server and store it in the application state.
// The sync button should be disabled when the sync is in progress.

export default class BluetoothSyncAPIService {
  static BLUETOOTH_SYNC_API = 'https://randomuser.me/api/?results=1000'
  static MAX_RETRIES = 3

  static sync = async () => {
    let retries = 0
    while (retries < BluetoothSyncAPIService.MAX_RETRIES) {
      try {
        const response = await fetch(BluetoothSyncAPIService.BLUETOOTH_SYNC_API)
        if (response.ok) {
          const data = await response.json()
          return data
        } else {
          throw new Error('Failed to sync data')
        }
      } catch (error) {
        retries++
        if (retries === BluetoothSyncAPIService.MAX_RETRIES) {
          throw error
        }
      }
    }
  }
}
