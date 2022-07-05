import React from 'react';
import { NavLink } from "react-router-dom"

function Categories() {
  return (
    <div className="upper-wrapper">
      <nav className="home__categories">
        <NavLink exact activeClassName="home__category_current" className="home__category" to="/home">
          <img alt="pizza category" src="/pizza.png"/>Pizza
        </NavLink>
        <NavLink activeClassName="home__category_current" className="home__category" to="/home/burgers">
          <img alt="burgers category" src="/burgers.png"/>Burgers
        </NavLink>
        <NavLink activeClassName="home__category_current" className="home__category" to="/home/salads">
          <img alt="salads category" src="/salads.png"/>Salads
        </NavLink>
        <NavLink activeClassName="home__category_current" className="home__category" to="/home/fries">
          <img alt="fries category" src="/fries.png"/>Fries
        </NavLink>
        <NavLink activeClassName="home__category_current" className="home__category" to="/home/drinks">
          <img alt="drinks category" src="/drinks.png"/>Drinks
        </NavLink>
      </nav>
    </div>
  );
}

export default Categories;
