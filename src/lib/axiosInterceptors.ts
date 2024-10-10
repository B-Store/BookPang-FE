import axios from "axios";

const axi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {},
});

export default axi;
