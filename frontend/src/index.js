import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import ReactThunk from "redux-thunk";
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from "react-router";
import reducer from "./reducer";
import HomePage from "./HomePage";
import AppLayout from "./AppLayout";
import WikiPageContainer from "./WikiPage/WikiPage"

let store=Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),Redux.applyMiddleware(ReactThunk));

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePage}/>
        <Route path="/page/:title" component={WikiPageContainer}/>
      </Route>
    </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
