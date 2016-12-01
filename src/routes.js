'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Index from './components/Index';
import UnPubIndex from './components/UnPubIndex';
import AllIndex from './components/AllIndex';
import Editor from './components/Editor';
import CreatePost from './components/CreatePost';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index}/>
    <Route path="unpublished" component={UnPubIndex}/>
    <Route path="all" component={AllIndex}/>
    <Route path="edit/:id" component={Editor}/>
    <Route path="new" component={CreatePost}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
