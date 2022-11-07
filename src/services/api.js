import axios from "axios";

const api = axios.create({
  baseURL: "https://alugue-meu-carro.herokuapp.com",
  timeout: 5000,
});

export default api;
