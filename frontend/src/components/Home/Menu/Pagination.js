import React from 'react';
import PropTypes from 'prop-types';

function Pagination (props) {

    let buttons = [];
    for (let i = 1; i <= props.pagesCount; i++) {
        if (props.currentPage===i)
            buttons.push (<button className="home__pages_current" onClick={() => props.onPageChange(i)} key={i}>{i}</button>);
        else
            buttons.push (<button className="home__pages" onClick={() => props.onPageChange(i)} key={i}>{i}</button>);
    } 
    return (
        <div className="home__pagination">
            {buttons}
        </div>
    )
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pagesCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;