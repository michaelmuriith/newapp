import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: true,
}

export const counterSlice = createSlice({
  name: 'themeReducer',
  initialState,
  reducers: {
    themeToggler: (state) => {
        state.theme = !state.theme;
    }
  },
})

// Action creators are generated for each case reducer function
export const { themeToggler } = counterSlice.actions

export default counterSlice.reducer