import React from 'react';

function Tags() { 
    return ( <div className="about__tags">
        <div className="about__tag">
            <img src="/instagram/1.jpg"alt="about us"/>
            Family of Creators
            <div className="about__description">
                Mauris tempus erat laoreet turpis lobortis, eu 
                tincidunt erat fermentum.  Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. 
            </div>
        </div>
        <div className="about__tag">
            <img src="/instagram/2.jpg" alt="about us"/>
            Made the Quality Way
            <div className="about__description">
                Mauris tempus erat laoreet turpis lobortis, eu 
                tincidunt erat fermentum.  
            </div>
        </div>
        <div className="about__tag">
            <img src="/instagram/3.jpg" alt="about us"/>
            Taste Driven
            <div className="about__description">
                Mauris tempus erat laoreet turpis lobortis, eu 
                tincidunt erat fermentum.  Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. 
            </div>
        </div>
    </div>
    )
}

export default Tags