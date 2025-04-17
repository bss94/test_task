import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';

export const fetchPosts = createAsyncThunk<Post[], string>('fetchPostsThunk', async (userId) => {
  try {
    const { data: posts } = await axiosApi.get(`/posts?userId=${userId}`);
    return posts;
  } catch (err) {
    console.log(err);
  }
});
