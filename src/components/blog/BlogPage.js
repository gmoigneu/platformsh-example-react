import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as blogActions from '../../actions/blogActions';
import {bindActionCreators} from 'redux';
import PostList from './PostList';
import PostListRow from './PostListRow';

class BlogPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.props.actions.loadPosts();
  }

  render() {
    const {posts} = this.props;
    return (
      <div className="jumbotron">
        <h1>Blog</h1>
        <PostList posts={posts} />
      </div>
    );
  }
}

BlogPage.propTypes = {
  posts: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    posts: state.blog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(blogActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
