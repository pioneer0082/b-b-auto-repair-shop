import { configureStore } from '@reduxjs/toolkit'
import customerReducer from '../utils/customerSlice'

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
