import { useLoaderData, Link } from "react-router-dom";
import "../components/UI/moviedetails.css"
export const MovieDetails = () => {
  const movie = useLoaderData();

  return (
    <div className="movie-details-container">
      <Link to="/movie" className="back-btn">← Back to Movies</Link>

      <div className="movie-details-content">
        <div className="movie-details-image">
          <img
            src={movie.image ? movie.image.original : "https://via.placeholder.com/400x600?text=No+Image"}
            alt={movie.name}
          />
        </div>

        <div className="movie-details-info">
          <h1>{movie.name}</h1>

          <div className="movie-meta">
            <p><strong>Language:</strong> {movie.language}</p>
            <p><strong>Genres:</strong> {movie.genres.join(", ") || "N/A"}</p>
            <p><strong>Premiered:</strong> {movie.premiered || "Unknown"}</p>
            <p><strong>Status:</strong> {movie.status || "Unknown"}</p>
            <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} min` : "Unknown"}</p>
            {movie.rating?.average && (
              <p><strong>Rating:</strong> {movie.rating.average}/10</p>
            )}
            {movie.network && (
              <p><strong>Network:</strong> {movie.network.name}</p>
            )}
          </div>

          {movie.summary && (
            <div className="movie-summary">
              <h3>Summary</h3>
              <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </div>
          )}

          {movie.officialSite && (
            <a href={movie.officialSite} target="_blank" rel="noopener noreferrer" className="official-site-btn">
              Visit Official Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
