import React from "react";

const Header = () => {
    return (
        <section className="header">
            <nav className="navbar ">
                <a className="navbar-brand" href="#">loopstudios</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className="navbar-nav-item ">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li className="navbar-nav-item">
                        <a className="nav-link" href="#">Careers</a>
                    </li>
                    <li className="navbar-nav-item">
                        <a className="nav-link" href="#">Events</a>
                    </li>
                    <li className="navbar-nav-item">
                        <a className="nav-link" href="#">Products</a>
                    </li>
                    <li className="navbar-nav-item">
                        <a className="nav-link" href="#">Support</a>
                    </li>
                </ul>
            </nav>
            <div  className="text-banner">
                <div>
                    IMMERSIVE EXPERIENCES THAT DELIVER
                </div>
            </div>
        </section>
    )
}

export default Header;