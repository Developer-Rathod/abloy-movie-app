/* import dotenv from "dotenv";
dotenv.config(); */

const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  fetchKids: `/discover/movie?api_key=${API_KEY}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
  fetchGenere: `/genre/movie/list?api_key=${API_KEY}`,
  fechComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
