import { createAsyncThunk } from '@reduxjs/toolkit';
import { FullUser, User } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  try {
    const { data: users } = await axiosApi.get('/users');
    return users;
  } catch (err) {
    console.log(err);
  }
});

export const fetchOneUser = createAsyncThunk<FullUser, string>('users/fetchOneUser', async (userId) => {
  try {
    const { data: user } = await axiosApi.get(`/users/${userId}`);
    return user;
  } catch (err) {
    console.log(err);
  }
});
