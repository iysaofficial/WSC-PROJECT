import "../assets/css/styles.css"
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [siteBrandText, setSiteBrandText] = useState(window.innerWidth < 426 ? "WSC" : "WORLD SCIENCE COMPETITION");
    const [winnersOpen, setWinnersOpen] = useState(false);


    const menuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleWinners = () => {
        setWinnersOpen(!winnersOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 420) {
                setSiteBrandText("WSC");
            } else {
                setSiteBrandText("WORLD SCIENCE COMPETITION");
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div id="menuHolder" className={menuOpen ? "drawMenu" : ""}>
                <div role="navigation" className="sticky-top border-bottom border-top" id="mainNavigation">
                    <div className="flexMain">
                        <div className="flex">
                            <button
                                className="whiteLink siteLink"
                                style={{ borderRight: '1px solid #eaeaea' }}
                                onClick={menuToggle}
                            >
                                <i className="fas fa-bars me-2"></i> MENU
                            </button>
                        </div>
                        <div className="flex3 text-center" id="siteBrand">
                            {siteBrandText}
                        </div>
                    </div>
                </div>
                <div id="menuDrawer">
                    <div className="p-4 border-bottom">
                        <div className='row'>
                            <div className="col text-end">
                                <i className="fas fa-times" role="button" onClick={menuToggle}></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="/" className="nav-menu-item"><i className="fas fa-home me-3"></i>Home</a>
                        <a href="#" className="nav-menu-item"><i className="fas fa-building me-3"></i>About Us</a>
                        <a href="/faq" className="nav-menu-item"><i className="fas fa-file-alt me-3"></i>FAQ</a>
                        <a href="/contact" className="nav-menu-item"><i className="fas fa-phone me-3"></i>Contact</a>

                        {/* NAVIGASI DROPDOWN */}
                        {/* <a href="#" className="nav-menu-item" onClick={toggleWinners}><i className="fas fa-search me-3"></i>List of Winners</a>
                        {winnersOpen && (
                            <div className="submenu">
                                <a href="#" className="nav-menu-item"><i className="fas fa-calendar me-3"></i>2022</a>
                                <a href="#" className="nav-menu-item"><i className="fas fa-calendar me-3"></i>2023</a>
                                <a href="#" className="nav-menu-item"><i className="fas fa-calendar me-3"></i>2024</a>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
