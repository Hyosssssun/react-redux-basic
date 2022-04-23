import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
      count: 0
  },
  reducers: {
    plus: (state) => {
      state.count += 1
    },
    minus: (state) => {
      state.count -= 1
    },
    plusAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { plus, minus, plusAmount } = counterSlice.actions

export default counterSlice.reducer