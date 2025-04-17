import { Post } from '../../types.ts';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './postsThunk.ts';

interface PostsState {
  posts: Post[];
  fetchingPosts: boolean;
}

const initialState: PostsState = {
  posts: [],
  fetchingPosts: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.fetchingPosts = true;
        state.posts = [];
      })
      .addCase(fetchPosts.fulfilled, (state, { payload: posts }) => {
        state.posts = posts;
        state.fetchingPosts = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.posts = [];
        state.fetchingPosts = false;
      });
  },
  selectors: {
    selectPosts: (state) => state.posts,
    selectFetchingPosts: (state) => state.fetchingPosts,
  },
});

export const postsReducer = postsSlice.reducer;
export const { selectPosts, selectFetchingPosts } = postsSlice.selectors;
