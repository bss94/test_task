import { FullUser, User } from '../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchOneUser, fetchUsers } from './usersThunk.ts';

interface UsersState {
  users: User[];
  fetchingUsers: boolean;
  oneUser: FullUser | null;
  fetchingOneUser: boolean;
}

const initialState: UsersState = {
  users: [],
  fetchingUsers: false,
  oneUser: null,
  fetchingOneUser: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.fetchingUsers = true;
        state.users = [];
      })
      .addCase(fetchUsers.fulfilled, (state, { payload: users }) => {
        state.users = users;
        state.fetchingUsers = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.fetchingUsers = false;
      });
    builder
      .addCase(fetchOneUser.pending, (state) => {
        state.fetchingOneUser = true;
        state.oneUser = null;
      })
      .addCase(fetchOneUser.fulfilled, (state, { payload: user }) => {
        state.oneUser = user;
        state.fetchingOneUser = false;
      })
      .addCase(fetchOneUser.rejected, (state) => {
        state.fetchingOneUser = false;
      });
  },
  selectors: {
    selectUsers: (state) => state.users,
    selectFetchUsers: (state) => state.fetchingUsers,
    selectOneUser: (state) => state.oneUser,
    selectFetchOneUser: (state) => state.fetchingOneUser,
  },
});

export const usersReducer = usersSlice.reducer;
export const { selectUsers, selectFetchUsers, selectOneUser, selectFetchOneUser } = usersSlice.selectors;
