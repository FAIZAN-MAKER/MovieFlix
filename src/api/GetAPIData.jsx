export const getMoviesData = async () => {
  try {
    const response = await fetch(
    `https://api.tvmaze.com/search/shows?q=${import.meta.env.VITE_API_KEY}`
    );
    const data = response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}
