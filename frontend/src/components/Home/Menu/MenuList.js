import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Pagination from './Pagination'

function MenuList(props) { 
    
    const pagesCount = props.food ? Math.ceil(props.food.length/7) : 0;
    
    const [currentPage,setPage] = useState(1);
    const [items,setItems] = useState([]);

    function changePage(number) {
        setPage(number);
    }
    useEffect ( () => {
        function menuFill () {
            let food = [];
            if(props.food) 
                (props.food.slice((currentPage-1)*7,currentPage*7)).forEach((item,index) => {
                    food.push(<MenuItem item={item} pizza={props.pizza} number={(currentPage-1)*7+index+1} key={item.id}/>);
                });
            else
                food = <div className="home__empty"/>;
                
            setItems(food);
        }

        menuFill();
    }, [currentPage,props.pizza,props.food]);

    return ( <Fragment>
            <ul className="home__menu">
                {items}
            </ul>
            <Pagination currentPage={currentPage} pagesCount={pagesCount} onPageChange={changePage}/>
        </Fragment>
    )
}

MenuList.propTypes = {
    food: PropTypes.arrayOf(PropTypes.object),
    pizza: PropTypes.bool
}

export default MenuList