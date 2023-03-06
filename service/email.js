import axios from "axios";

export default axios.create({
  baseURL: "https://mailservicepk.onrender.com/",
  timeout: 20000,
  headers: { "Content-Type": "application/json" },
});
