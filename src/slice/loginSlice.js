import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice(
    {
        name: 'login',
        initialState: [],
        reducers: {
            pushDataLoginFB(state, action) {
                state.push(action.payload)
            }
        }
    }
)

const { actions, reducer } = loginSlice
export const { pushDataLoginFB } = actions
export default reducer