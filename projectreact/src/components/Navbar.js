import React, { useState } from 'react';
function Navbar(){
    const [open, setOpen] = useState(false); 
        return (
            <div>
                <nav>
                    <div className="logo">React Nav</div>
                    <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/product">Product</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                    <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
                </nav>
            </div>
        );
}

export default Navbar;
