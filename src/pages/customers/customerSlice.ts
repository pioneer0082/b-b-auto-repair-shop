import { createSlice } from '@reduxjs/toolkit'

interface Customer {
  id: string
  name: string
  email: string
}

interface CustomerState {
  list: Customer[]
}

const initialState: CustomerState = {
  list: [
    {
      id: '1',
      name: 'Jane Doe',
      email: 'rickknowles12412@gmail.com',
    },
    {
      id: '2',
      name: 'John Smith',
      email: 'johnsmith@example.com',
    },
  ],
}

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
})

export default customerSlice.reducer
