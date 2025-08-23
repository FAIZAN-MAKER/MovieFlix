import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/UI/about.css"
export const About = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  // Use a hook to handle scroll-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="about-page-container">
      {/* Cinematic Hero Section */}
      <section className="about-hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Crafting the <span className="gradient-text-alt">Ultimate</span>
            <br />
            Streaming Experience
          </h1>
          <p className="hero-subtitle">
            At MovieFlix, we believe every frame tells a story.
            Our mission is to bring that story to you, in its most beautiful and authentic form.
          </p>
        </div>
        <div className="parallax-bg-wrapper">
          <div className="parallax-bg"></div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section
        className="story-mission-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="story-content">
          <h2 className="section-title">Our Story & Mission</h2>
          <p className="section-text">
            It all started with a simple idea: to create a home for movie lovers. Tired of endless ads and low-quality streams, we built a platform where cinematic integrity and user experience come first. Our mission is clear: to deliver a vast, high-quality library of films in stunning 4K, all in one seamless, ad-free experience.
          </p>
          <div className="stat-cards-wrapper">
            <div className="stat-card">
              <span className="stat-number">10K+</span>
              <p className="stat-label">Movies Available</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">4K+</span>
              <p className="stat-label">Ultra HD Quality</p>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <p className="stat-label">Ad-Free Viewing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        className="values-section"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card-alt">
            <div className="icon">🌟</div>
            <h3>Passion for Film</h3>
            <p>Every decision is guided by our deep love and respect for the art of cinema.</p>
          </div>
          <div className="value-card-alt">
            <div className="icon">💡</div>
            <h3>Seamless Innovation</h3>
            <p>We're constantly improving, ensuring a fluid and intuitive platform for our users.</p>
          </div>
          <div className="value-card-alt">
            <div className="icon">✨</div>
            <h3>User-First Approach</h3>
            <p>Your experience is our priority. We listen, adapt, and build for you.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="cta-section"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="cta-content">
          <h2>Ready to Explore?</h2>
          <p>Your cinematic journey begins now. Discover your next favorite film.</p>
          <button className="cta-button" onClick={() => navigate('/movie')}>
            Start Streaming Today
          </button>
        </div>
      </section>
    </div>
  );
};
