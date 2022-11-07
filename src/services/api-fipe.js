

import axios from "axios";

const fipe = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v2/cars/brands",
  timeout: 5000, 
});


export default fipe;