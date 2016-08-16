import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import AppBar from 'material-ui/AppBar';
import {connect} from 'react-redux';

class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <header>
        <AppBar
          title="Platform.sh"
        />

        <nav>
          <IndexLink to="/" activeClassName="active">Blog</IndexLink>
          {" - "}
          <Link to="/about" activeClassName="active">About</Link>
          {" - "}
          </nav>
      </header>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps)(Header);
