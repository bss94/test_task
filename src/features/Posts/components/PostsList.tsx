import React from 'react';
import { Post } from '../../../types.ts';
import { Alert, Grid, Typography } from '@mui/material';
import PostItem from './PostItem.tsx';

interface Props {
  posts: Post[];
}
const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid size={12}>
        <Typography variant="h6">Posts</Typography>
      </Grid>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Grid size={12} key={post.id}>
            <PostItem post={post} />
          </Grid>
        ))
      ) : (
        <Grid size={12}>
          <Alert severity="warning">Post not found</Alert>
        </Grid>
      )}
    </Grid>
  );
};

export default PostsList;
