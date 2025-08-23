import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../UI/header.css";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <section className="top-bar">
        <div className="top-bar-content">
          <div className="membership-info">
            <div className="pulse-dot"></div>
            <p className="membership-text">
              Get MovieFlix Membership, 30-Days return or refund guarantee
            </p>
          </div>
          <div className="auth-links">
            <NavLink to="/signin" className="sign-in">
              SIGN IN
            </NavLink>
            <NavLink to="/signup" className="sign-up">
              SIGN UP
            </NavLink>
          </div>
        </div>
      </section>

      {/* Main Navigation */}
      <div className="main-nav">
        {/* Logo */}
        <div className="logo-container">
          <NavLink to="/" className="logo">
            <div className="logo-icon">
              <span className="logo-letter">M</span>
            </div>
            <p className="logo-text">MovieFlix</p>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav-container">
          <ul className="desktop-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <span className="nav-icon">🏠</span>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <span className="nav-icon">👤</span>
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie" className="nav-link">
                <span className="nav-icon">🎬</span>
                <span>Movie</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                <span className="nav-icon">📞</span>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              <span className="mobile-icon">🏠</span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>
              <span className="mobile-icon">👤</span>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" onClick={closeMobileMenu}>
              <span className="mobile-icon">🎬</span>
              <span>Movie</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu}>
              <span className="mobile-icon">📞</span>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Animated Border */}
      <div className="animated-border"></div>
    </header>
  );
};
