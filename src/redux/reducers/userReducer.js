import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchUsersSuccess: (state, action) => {
      state.users = action.payload
      state.loading = false
    },
    fetchUsersFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions

export default userSlice.reducer