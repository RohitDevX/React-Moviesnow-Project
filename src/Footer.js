import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import {faFire,faStar,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
function Footer({displaypage}){
    return(
<div>
<div class="footer-nav">
    <div className="footer-bar">
      <Link to="/Trending"><span onClick={()=>{displaypage("trending")}}><FontAwesomeIcon icon={faFire} />Trending</span></Link>
      <Link to="/popular"><span onClick={()=>{displaypage("popular")}}><FontAwesomeIcon icon={faStar} />Popular</span></Link>
      
      </div>
    
  </div>
<footer class="footer">
 
  <div class="footer__addr">
    <h1 class="footer__logo">Something</h1>
        
    <h2>Contact</h2>
    
    <address>
      India<br/>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Technology</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Hardware Design</a>
        </li>
        
        <li>
          <a href="#">Software Design</a>
        </li>
        
        <li>
          <a href="#">Digital Signage</a>
        </li>
        
        <li>
          <a href="#">Automation</a>
        </li>
        
        <li>
          <a href="#">Artificial Intelligence</a>
        </li>
        
        <li>
          <a href="#">IoT</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div class="legal__links">
      
    </div>
  </div>
</footer>
</div>
    )
}
export default Footer;