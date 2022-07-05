import React from 'react';

function Gallery () {
    return ( <div className="footer__gallery">  
        <div className="footer__photo" style={{backgroundImage: "url('/instagram/1.jpg')"}}></div>
        <div className="footer__photo" style={{backgroundImage: "url('/instagram/2.jpg')"}}></div>
        <div className="footer__photo" style={{backgroundImage: "url('/instagram/3.jpg')"}}></div>
        <div className="footer__photo" style={{backgroundImage: "url('/instagram/4.jpg')"}}></div>
        <div className="footer__photo" style={{backgroundImage: "url('/instagram/5.jpeg')"}}></div>
        <div className="footer__photo" style={{backgroundImage: "url('/instagram/6.jpg')"}}></div>
    </div>
    );
}

export default Gallery;