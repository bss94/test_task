import { FullUser, User } from '../../types.ts';
import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
  users: User[];
  fetchUsers: boolean;
  oneUser: FullUser | null;
  fetchOneUser: boolean;
}

const initialState: UsersState = {
  users: [],
  fetchUsers: false,
  oneUser: null,
  fetchOneUser: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectUsers: (state) => state.users,
    selectFetchUsers: (state) => state.fetchUsers,
    selectOneUser: (state) => state.oneUser,
    selectFetchOneUser: (state) => state.fetchOneUser,
  },
});

export const usersReducer = usersSlice.reducer;
export const { selectUsers, selectFetchUsers, selectOneUser, selectFetchOneUser } = usersSlice.selectors;
