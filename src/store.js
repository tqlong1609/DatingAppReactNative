import { configureStore } from '@reduxjs/toolkit'
import testSlice from '/src/slice/testSlice'

const store = configureStore(
    {
        reducer: {
            test: testSlice
        }
    }
)

export default store;