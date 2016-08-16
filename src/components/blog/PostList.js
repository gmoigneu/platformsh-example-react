import React, {PropTypes} from 'react';
import PostListRow from './PostListRow';

const PostList = ({posts}) => {
  return (
    <div className="postList">
    {posts.items.map(post =>
      <PostListRow key={post.id} post={post} />
    )}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.object.isRequired
};

export default PostList;
