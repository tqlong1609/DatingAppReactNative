import AsyncStorage from '@react-native-community/async-storage'

export const saveStorage = async (STORAGE_KEY, value) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, value)
        console.log('SaveData storage success')
        return true
    } catch (e) {
        console.log('SaveData storage fail', e)
        return false
    }

}

export const readStorage = async (STORAGE_KEY) => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY)
        if (data !== null) {
            return data
        }
    } catch (e) {
        console.log('Read data storage fail', e)
        return e
    }
}

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
        console.log('Storage successfully cleared!')
    } catch (e) {
        console.log('Failed to clear the async storage.')
    }
}



