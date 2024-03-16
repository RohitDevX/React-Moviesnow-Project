import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
function Header({image1,image2}){
    return(
        <div className="main-header">
                <div className="main-header-container">
                    <div className="logo">
                       <Link to="/"><img src={image1} alt="logo missing" title="logo" /></Link>
                    </div>
                    <div className="trademark">
                        <img src={image2} alt="animation ticket" title="animation" />
                        <h2 className="slogan">Your One Destination,<br /> For your Favourite Movies</h2>
                    </div>
                </div>
            </div>
    )
}
    export default Header;