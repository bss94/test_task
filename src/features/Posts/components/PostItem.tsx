import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Post } from '../../../types.ts';

interface Props {
  post: Post;
}
const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <Card>
      <CardHeader title={post.title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {post.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
