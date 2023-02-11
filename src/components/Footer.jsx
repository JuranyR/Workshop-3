import React from "react";
import logo from '../assets/images/logo.svg';
import twitter from '../assets/images/icon-twitter.svg';
import facebook  from '../assets/images/icon-facebook.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
    const items= ['About','Careers','Events','Products','Support'];
    return (
        <footer className="footer">
            <section className="footer-title-social">
                <img src={logo} alt="logo" />

                <div className="desktop">
                    <a href="" className="me-4 text-reset">
                        <img src={facebook} alt="face" />
                        <hr />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={twitter} alt="tw" />
                        <hr />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={pinterest} alt="pr" />
                        <hr />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={instagram} alt="in" />
                        <hr />
                    </a>
                </div>
            </section>
            <section className="container-fluid">
                {
                    items.map(item=>(
                        <div className="container-fluid-item">
                            <h6>{item}</h6>
                            <hr />
                        </div>
                    ))
                }
                <div className="mobile">
                    <a href="" className="me-4 text-reset">
                        <img src={facebook} alt="face" />
                        <hr />
                    </a>
                    
                    <a href="" className="me-4 text-reset">
                        <img src={twitter} alt="tw" />
                        <hr />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={pinterest} alt="pr" />
                        <hr />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={instagram} alt="in" />
                        <hr />
                    </a>
                </div>
                
                <div className="text">
                    © 2021 loopstudio. All rigths reserved
                </div>
            </section>
        </footer>
    )
}

export default Footer;