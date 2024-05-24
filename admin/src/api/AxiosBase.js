import Axios from "axios";

export default Axios.create({
  baseURL:
    "https://crowin-backend.herokuapp.com/api" /* "https://crowin-backend.herokuapp.com/api" */, //process.env.REACT_APP_BASE_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    Axios.defaults.headers.common["x-access-token"] = token;
  } else {
    // Delete auth header
    delete Axios.defaults.headers.common["x-access-token"];
  }
};
