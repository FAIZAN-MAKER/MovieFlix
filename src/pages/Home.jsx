import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../components/UI/home.css";

export const Home = () => {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Array of 6 movie data objects with image URLs
  const trendingMovies = [
    {
      id: 1,
      title: "The last Naruto-the movie",
      vote_average: 7.9,
      image_url: "https://i.pinimg.com/736x/4e/a1/ac/4ea1acc89881df527b36c92a4fa52082.jpg"
    },
    {
      id: 2,
      title: "Demon Slayer-infinity castle",
      vote_average: 8.0,
      image_url: "https://i.pinimg.com/736x/94/c8/38/94c838dd0cd3876d2b72dc5760055366.jpg"
    },
    {
      id: 3,
      title: "Venom",
      vote_average: 8.8,
      image_url: "https://i.pinimg.com/736x/a4/0f/34/a40f34dad1e996b6668799aa845b6377.jpg"
    },
    {
      id: 4,
      title: "Death note",
      vote_average: 9.0,
      image_url: "https://i.pinimg.com/736x/04/8a/fc/048afcc1d1f6b331a63357c6c7fee96d.jpg"
    },
    {
      id: 5,
      title: "Naruto",
      vote_average: 8.6,
      image_url: "https://i.pinimg.com/1200x/3a/8c/63/3a8c63737ae2d94f9d4f09f477e3df34.jpg"
    },
    {
      id: 6,
      title: "Avengers",
      vote_average: 8.8,
      image_url: "https://i.pinimg.com/1200x/42/00/da/4200dae9ac7b15a5c65375cbfaceaa69.jpg"
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    const featureInterval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(featureInterval);
  }, []);

  const handleExploreClick = () => {
    navigate('/movie');
  };

  const features = [
    {
      title: "Unlimited Movies",
      description: "Access thousands of movies from every genre imaginable",
      icon: "🎬"
    },
    {
      title: "4K Ultra HD",
      description: "Experience cinema-quality streaming in stunning 4K resolution",
      icon: "📺"
    },
    {
      title: "No Ads Ever",
      description: "Enjoy uninterrupted viewing with our premium ad-free experience",
      icon: "🚫"
    },
    {
      title: "Download & Watch",
      description: "Take your movies anywhere with our offline download feature",
      icon: "📥"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Parallax Effect */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="parallax-layer layer-1"></div>
          <div className="parallax-layer layer-2"></div>
          <div className="parallax-layer layer-3"></div>
          <div className="parallax-layer layer-4"></div>
        </div>

        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            PREMIUM STREAMING PLATFORM
          </div>

          <h1 className="hero-title">
            The Ultimate
            <span className="gradient-text"> Movie Experience</span>
          </h1>

          <p className="hero-description">
            Discover thousands of movies, curated collections, and exclusive content
            in stunning 4K quality. Your cinematic journey starts here.
          </p>

          <div className="hero-actions">
            <button
              className="explore-btn"
              onClick={handleExploreClick}
            >
              <span className="btn-text">Explore Now</span>
              <span className="btn-icon">→</span>
              <div className="btn-shine"></div>
            </button>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Movies</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2 className="section-title">Why Choose MovieFlix?</h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${index === currentFeature ? 'active' : ''}`}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Preview Section */}
      <section className="trending-section">
        <div className="trending-container">
          <h2 className="section-title">Trending Now</h2>

          <div className="movies-scroll">
            {trendingMovies.map((movie) => (
              <div key={movie.id} className="movie-preview">
                <div className="movie-poster">
                  <img
                    src={movie.image_url}
                    alt={movie.title}
                    className="poster-image"
                  />
                  <div className="movie-overlay">
                    <span className="play-icon">▶</span>
                  </div>
                </div>
                <div className="movie-info">
                  <h4>{movie.title}</h4>
                  <div className="movie-rating">⭐ {movie.vote_average}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="view-all-btn"
            onClick={handleExploreClick}
          >
            View All Movies
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Ready to Start Streaming?</h2>
            <p>Join millions of movie lovers and experience the best in entertainment</p>
            <button
              className="cta-btn"
              onClick={handleExploreClick}
            >
              Start Exploring
            </button>
          </div>
          <div className="cta-background">
            <div className="floating-element el-1">🎭</div>
            <div className="floating-element el-2">🎬</div>
            <div className="floating-element el-3">🏆</div>
          </div>
        </div>
      </section>
    </div>
  );
};
