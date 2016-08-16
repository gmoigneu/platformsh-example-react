import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostListRow = ({post}) => {
  return (
    <div className="postListRow">
      <h2>{post.title}</h2>
      <p className="created">{post.created}</p>
    </div>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
