import api from "../services/api";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const RegisterContext = createContext({});
const RegisterProvider = ({ children }) => {
  const navigate = useNavigate();
  const registerUser = (data) => {
    data.imagem = "";
    data.carrosCadastrados = [];
    data.carrosAlugados = [];
    api
      .post("/register", data)
      .then((response) => {
        navigate("/", { replace: true });
        //console.log(response);
      })
      .catch((err) => ({
        message: console.log(err.response.data),
      }));
  };
  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};
export default RegisterProvider;
