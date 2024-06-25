import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers : {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },       
        multiplyBy2: (state) => {
            state.value *= 2 
        },  },
})


export const {increment, decrement, multiplyBy2 } = counterSlice.actions
export default counterSlice.reducer
