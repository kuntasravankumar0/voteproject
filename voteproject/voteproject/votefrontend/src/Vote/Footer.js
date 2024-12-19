import React from 'react';
import './allcss.css'; // Make sure to create this CSS file

function Footer() {
    return (
        <footer className="footer-container">
           
           
                <nav>
                    <div className="footer-links">
                       <span> <a href="/">Home</a></span>&nbsp;&nbsp;&nbsp; 
                       <span>   <a href="/help">Help</a></span>&nbsp;&nbsp;
                    </div>
                    <p>&copy; {new Date().getFullYear()} kunta sravankumar</p>
                </nav>
            
        </footer>
    );
}

export default Footer;
