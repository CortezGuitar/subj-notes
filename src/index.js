import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import SubjService, { SubjServiceProvider } from './service';
import store from './store/store';

const subjService = new SubjService();

ReactDOM.render(
  <Provider store={store}>
    <SubjServiceProvider value={subjService}>
      <Router>
        <App />
      </Router>
    </SubjServiceProvider>
  </Provider>,
  document.getElementById('root')
);
