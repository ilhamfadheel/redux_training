import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;
const initialState = [];

const slice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        balance: action.payload.balance,
      });
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
