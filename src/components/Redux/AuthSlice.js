import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'isLogin',
  initialState: {
    key : false,
    name:'ra'
  },
  reducers: {
    changeKey: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.key  = !state.key
    },
    changeName:(state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.name  = action.payload
      },
 
  },
})

// Action creators are generated for each case reducer function
export const { changeKey ,changeName} = AuthSlice.actions

export default AuthSlice.reducer