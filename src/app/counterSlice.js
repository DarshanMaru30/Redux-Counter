import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    // name: 'Darshan',
    // email: 'darshan@gmail.com'
    temp : 0,
  },
  reducers: {
    increment: (state) => {
      state.value += Number(state.temp)
    },
    decrement: (state) => {
      state.value -= Number(state.temp)
    },
    incrementByAmount: (state, action) => {
      state.temp = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
