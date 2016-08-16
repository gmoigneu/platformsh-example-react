import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import AboutPage from './components/about/AboutPage.js';
import BlogPage from './components/blog/BlogPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlogPage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);
