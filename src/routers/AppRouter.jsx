import React from 'react';
import { BrowserRouter, Route, history } from 'react-router-dom';

// Import Component
import App from '../components/App';
import ProductDetail from '../components/ProductDetail';

const AppRouter = () => (
  <BrowserRouter history={history}>
    <div className="container main-body">
      <Route path="/" component={App} exact />
      <Route path="/data/:id" component={ProductDetail} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
