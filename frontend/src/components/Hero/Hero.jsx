import React from 'react';
import "./Hero.css";


const Hero = () => {

    return (

        <div className="nav-bottom" style={{ marginBottom: "3rem" }} id='deals' >
            <div className="lef" style={{ marginLeft: "60px" }}>
                <h3
                    style={{ color: '#55f358', padding: '10px', fontSize: "45px" }}>
                    Save upto 50%off
                </h3>
                <h1
                    style={{ color: 'white', padding: '10px', fontFamily: 'Ruluko', fontSize: "30px" }}>
                    BUY FRESH <br />ORGANIC FOOD!
                </h1>
                <h5
                    style={{ color: 'white', padding: '10px', fontSize: "1.3rem", fontFamily: 'Ruluko', fontSize: "20px" }}>
                    Indulge in Nature's Bounty:<br />Farm-Fresh Fruits and vegies to Your Doorstep!</h5>
                <br />
                <div className="buy-now"><button>Buy Now</button></div>
            </div>
        </div>

    );
};

export default Hero;
