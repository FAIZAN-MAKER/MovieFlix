import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Movie } from "./pages/Movie"
import { MovieDetails } from "./pages/Moviedetails";
import { Contact } from "./pages/Contact"
import Applayout from "./components/layout/Applayout"
import './index.css';
import { Errorpage } from "./pages/Errorpage"
import { getMoviesData } from "./api/GetAPIData"

// 👈 Loader function for individual movie details
const getMovieDetails = async ({ params }) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
  if (!response.ok) {
    throw new Error('Movie not found');
  }
  return response.json();
};

// 👈 Contact form action function
export async function contactAction({ request }) {
  const formData = await request.formData();
  const submission = Object.fromEntries(formData);

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Validate form
  if (!submission.email || !submission.email.includes('@')) {
    return {
      message: 'Please enter a valid email address',
      status: 'error'
    };
  }

  if (!submission.name || submission.name.trim().length < 2) {
    return {
      message: 'Please enter your name',
      status: 'error'
    };
  }

  if (!submission.message || submission.message.trim().length < 10) {
    return {
      message: 'Please enter a message with at least 10 characters',
      status: 'error'
    };
  }

  // Here you would typically send the data to your backend
  // For now, we'll just log it and return a success message
  console.log('Form submission:', submission);

  return {
    message: 'Your message has been sent successfully! We\'ll get back to you soon.',
    status: 'success'
  };
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout/>,
      errorElement: <Errorpage />,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
          action: contactAction, // 👈 Add the action here
        },
        {
          path: "/movie",
          element: <Movie/>,
          loader: getMoviesData,
        },
        {
          path: "/movie/:id",  // 👈 Route for movie details
          element: <MovieDetails/>,
          loader: getMovieDetails,
        },
      ]
    },
  ])

  return <RouterProvider router={router}/>
}

export default App
