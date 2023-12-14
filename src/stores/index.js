import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

const showSlice = createSlice({
    name: "show",
    initialState: {show: false},
    reducers: {
        showAlert:(state) => {
            state.show = true
        },
        hideAlert:(state) => {
            state.show = false
        }
    }
})

export const store = configureStore({
    reducer: showSlice.reducer,
  })

export const { showAlert, hideAlert } = showSlice.actions;
