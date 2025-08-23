import "../UI/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo-icon">
            <span className="logo-letter">M</span>
          </div>
          <h2 className="logo-text">MovieFlix</h2>
          <p className="footer-desc">
            MovieFlix is your go-to platform for movies, reviews, and
            entertainment updates. Stay connected with us and never miss out on
            the latest releases 🎬.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-title">Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3 className="footer-title">Resources</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-title">Stay Updated</h3>
          <p className="newsletter-text">
            Subscribe to our newsletter for the latest movies & news.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MovieFlix. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#">👍</a>
          <a href="#">🐦</a>
          <a href="#">📸</a>
          <a href="#">▶️</a>
        </div>
      </div>
      <div className="animated-border"></div>
    </footer>
  );
};
