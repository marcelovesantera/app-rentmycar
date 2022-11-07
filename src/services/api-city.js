
import axios from "axios";

const localidades = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/municipios",
  timeout: 5000, 
});
 //const data = await localidades.get("/").then(res=>res.data)



export default localidades;
