import React, { useState } from 'react';
import styles from './Navbar.module.css';
import './burger.css';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbar}>
                <div id="burger" onClick={toggleMenu} className={`${isMenuOpen ? "open" : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.menuContent}>
                    <a href="#home" className={styles.menuItem}>Home</a>
                    <a href="#about" className={styles.menuItem}>About</a>
                    <a href="#projects" className={styles.menuItem}>Projects</a>
                    <a href="#contact" className={styles.menuItem}>Contact</a>
                </div>
            </div>
        </div>
    );
}