import axios from "axios";
/* Movie database base url  */
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
