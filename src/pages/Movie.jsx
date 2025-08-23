import { useLoaderData, Link } from "react-router-dom";
import "../components/UI/movie.css"

export const Movie = () => {
  const moviesData = useLoaderData();

  // 🔥 Filter out the movie you don't want
  const filteredMovies = moviesData.filter(
    (item) => item.show.name !== "Titanic Sinks Tonight"
  );

  return (
    <div className="movies-container">
      {filteredMovies.map((item) => {
        const show = item.show;
        return (
          <div key={show.id} className="movie-card">
            <img
              src={show.image ? show.image.medium : "https://via.placeholder.com/210x295?text=No+Image"}
              alt={show.name}
              className="movie-image"
            />
            <div className="movie-card-content">
              <h3 className="movie-title">{show.name}</h3>
              <Link to={`/movie/${show.id}`} className="view-details-btn">
                View More Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
