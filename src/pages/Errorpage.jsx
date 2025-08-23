import { useRouteError, NavLink, useNavigate } from "react-router-dom";
import "../components/UI/error.css"
export const Errorpage = () => {
  const error = useRouteError();
  const navigate = useNavigate();


  const handleGoBack = () =>{
    return navigate(-1)
  }
  if(error.status === 404) {
    return(
      <section className="error-page">
        {/* Animated Particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        <div className="error-container">
          <figure className="error-figure">
            <img
              className="error-image"
              src="/Errorpage.gif"
              alt="404 page"
            />
          </figure>
          <div className="error-content">
            <h1 className="error-title">404</h1>
            <p className="error-message">
              The page you were looking for could not be found
            </p>
            <p className="error-submessage">
              Don't worry, let's get you back on track
            </p>
            <NavLink to="/" className="back-button">
              <span className="back-icon">←</span>
              <span className="back-text" onClick={handleGoBack}>Go back</span>
            </NavLink>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="generic-error">
      <h1>The page you are looking for does not exist</h1>
    </div>
  )
}
