import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom" 
import { composeWithDevTools } from 'redux-devtools-extension';
import DocumentMeta from 'react-document-meta';

import Home from './components/Home/Home'
import About from './components/About/About'
import Header from './components/Header'
import Shop from './components/Shop/Shop'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './store/reducers'

const store = createStore (rootReducer,composeWithDevTools());

const meta = {
  title: 'FastivPizza',
  meta: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
  }
}

function App() {

  return (
    <Provider store = {store}>
      <DocumentMeta {...meta}/>
      <Router>
      <div className="upper-wrapper">
        <Header/>
      </div>
      <div className="body-wrapper">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/locator">
            <ContactUs/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
        </Switch>
      </div>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
