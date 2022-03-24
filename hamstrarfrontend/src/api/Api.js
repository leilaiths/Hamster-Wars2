
//installera axios 
//fetch data

import axios from "axios";

const BASE_URL = "http://localhost:1378/hamsters";

const Api = axios.create({
  baseURL: BASE_URL,
});



// Exporting Api into the global namespace for introspecting
window.Api = Api;

export default Api;