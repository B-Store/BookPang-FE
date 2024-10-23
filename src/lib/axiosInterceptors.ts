import axios from "axios";

const axi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skipbrowser-warning": "69420",
  },
});

export default axi;
