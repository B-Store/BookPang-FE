import axios from "axios";

const axi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Access-Control-Allow-Credentials": true,
    "ngrok-skip-browser-warning": true,
    // "ngrok-skipbrowser-warning": "69420",
    //   // "Content-Type": "application/json",
    //   // "ngrok-skipbrowser-warning": "69420",
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
  },
});

export default axi;
