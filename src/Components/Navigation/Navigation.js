import React from "react";
import Logout from './logout.png'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if(isSignedIn) {
    return(
            <nav style={{display:'flex', justifyContent:'flex-end', marginRight:'1vw', height:'10vh'}}>
                <p onClick={() => onRouteChange('signout')} className="link dim underline pa3 pointer" style={{fontSize:'3vh', color:'white'}}><img src={Logout} alt=""></img></p>
            </nav>
        );
    } else {
        return(
            <nav style={{display:'flex', justifyContent:'flex-end', marginRight:'1vw'}}>
                <p onClick={() => onRouteChange('signin')} className="link dim underline pa3 pointer" style={{fontSize:'3vh', color:'black'}}>Sign In</p>
                <p onClick={() => onRouteChange('register')} className="link dim underline pa3 pointer" style={{fontSize:'3vh', color:'black'}}>Register</p>
            </nav>
        );
    }
}

export default Navigation