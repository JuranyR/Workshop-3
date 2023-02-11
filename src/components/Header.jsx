import React, {useState} from "react";
import logo from '../assets/images/logo.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import close from '../assets/images/icon-close.svg';


const Header = () => {
    const [openMenu, setOpenMenu]= useState(false)
    const items= ['About','Careers','Events','Products','Support'];

    const onOpenMenu=()=>{
        setOpenMenu(!openMenu)
    }

    return (
        <section className="header">
            <nav className="navbar ">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" onClick={()=>onOpenMenu()}>
                    <img src={hamburger} alt="logo" />
                </button>
                <ul className={openMenu? 'navbar-nav show':'navbar-nav'}>
                    <div className={openMenu? 'navbar-close show':'navbar-close'}>
                        <img src={logo} alt="logo" />
                        <button type="button" onClick={()=>onOpenMenu()}>
                            <img src={close} alt="close" />
                        </button>
                    </div>
                    {
                        items.map(item=>(
                            <li className="navbar-nav-item ">
                                <a className="nav-link" href="#">{item}</a>
                                <hr/>
                            </li>
                        ))
                    }
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