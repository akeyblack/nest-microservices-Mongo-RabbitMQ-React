import React from 'react';

function Features () {
    return ( <div className="footer__features">
        <div className="footer__feature" style={{backgroundImage: "url('/feature-bag.png')"}}>
            Praesent pulvinar neque pellentesque mattis pretium
            <div className="footer__feature-title">
                Best Quality
            </div>
        </div>
        <div className="footer__feature" style={{backgroundImage: "url('/feature-clock.png')"}}>
            Praesent pulvinar neque pellentesque mattis pretium
            <div className="footer__feature-title">
                Best Quality
            </div>
        </div>
        <div className="footer__feature" style={{backgroundImage: "url('/feature-chef.png')"}}>
            Praesent pulvinar neque pellentesque mattis pretium
            <div className="footer__feature-title">
                Best Quality
            </div>
        </div>
        <div className="footer__feature" style={{backgroundImage: "url('/feature-food.png')"}}>
            Praesent pulvinar neque pellentesque mattis pretium
            <div className="footer__feature-title">
                Best Quality
            </div>
        </div>
    </div>
    );
}

export default Features;