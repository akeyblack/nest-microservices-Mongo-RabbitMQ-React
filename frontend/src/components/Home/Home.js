import React from 'react';
import Categories from './Categories';
import {
  BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {connect} from 'react-redux';
import MenuList from './Menu/MenuList';
import Features from './Features';

function Home(props) {  
  return (
    <div>
      <Router>
        <Categories/>
        <div className="home-wrapper">
          <Switch>
            <Route exact path="/home">
              <MenuList food={props.food[0]} pizza key={0}/>
            </Route>
            <Route path="/home/burgers">
              <MenuList food={props.food[1]} key={1}/>
            </Route>
            <Route path="/home/salads">
              <MenuList food={props.food[2]} key={2}/>
            </Route>
            <Route path="/home/fries">
              <MenuList food={props.food[3]} key={3}/>
            </Route>
            <Route path="/home/drinks">
              <MenuList food={props.food[4]} />
            </Route>
          </Switch>
        </div>
      </Router>
      <Features/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    food: state.cart.items
  };
};

export default connect(mapStateToProps)(Home);