import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem("user") ?JSON.parse(localStorage.getItem("user")): null ,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logedinUserInfo: (state, action) => {
            state.value = action.payload;

        },

    },
})

// Action creators are generated for each case reducer function
export const { logedinUserInfo } = userSlice.actions

export default userSlice.reducer