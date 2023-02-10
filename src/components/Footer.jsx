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
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={twitter} alt="tw" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={pinterest} alt="pr" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={instagram} alt="in" />
                    </a>
                </div>
            </section>
            <section className="container-fluid">
                {
                    items.map(item=>(
                        <div className="container-fluid-item">
                            <h6>{item}</h6>
                        </div>
                    ))
                }
                <div className="mobile">
                    <a href="" className="me-4 text-reset">
                        <img src={facebook} alt="face" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={twitter} alt="tw" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={pinterest} alt="pr" />
                    </a>
                    <a href="" className="me-4 text-reset">
                        <img src={instagram} alt="in" />
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