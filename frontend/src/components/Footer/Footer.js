import React, { Fragment } from 'react';
import Gallery from './Gallery';
import FindUs from './FindUs';

function Footer() {
    return ( <div className="foooter__wrapper">
        <Fragment>
            <Gallery/>
            <FindUs/>
        </Fragment>
    </div>
    );
}

export default Footer;
