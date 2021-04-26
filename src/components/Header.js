import React from "react";
import Typed from "react-typed";
const Header = () => {
    return (
        <div id="home" className="header-wraper">
        <div className="main-info">
            <h1>Let's Explore the beauty of nature.</h1>
            <Typed 
            className= "typed-text"
            strings={["Magic of Nature","Nature Travels","Vlog"]}
            typeSpeed={40}
            backSpeed={60}
            loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>
        </div>
        </div>

    )
}


export default Header
