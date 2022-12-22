import React from "react";
import Tilt from "react-parallax-tilt";
import './Logo.css'
import Brain from './brain.png'

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt scale={1.4} style={{ height: '150px', width:'150px' }} className="Tilt">
                <h1><img src={Brain} alt="brain" /></h1>
            </Tilt>
      </div>
    )
}

export default Logo