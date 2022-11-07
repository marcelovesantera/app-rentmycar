import { RegContainer } from "./styles";
import imageRegister from "../../assets/imageRegister.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validator/registerSchema";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";
import Header from "../../components/Dashboard/Header";
import ModalLogin from "../../components/ModalLogin";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { registerUser } = useContext(RegisterContext);
  const { isModalLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();

  return (
    <RegContainer>
      {/* {isModalLogin && <ModalLogin />}
      <Header /> */}
      <div className="container">
        <div className="divImage">
          <img src={imageRegister} alt="Imagem Carro" />
        </div>
        <div className="registerInputs">
          <h1>Cadastre-se</h1>
          <form onSubmit={handleSubmit(registerUser)}>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              {...register("name")}
            />
            <span className="errorsSpan">{errors.name?.message}</span>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <span className="errorsSpan">{errors.email?.message}</span>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <span className="errorsSpan">{errors.password?.message}</span>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <span className="errorsSpan">
              {errors.confirmPassword?.message}
            </span>
            <input
              type="number"
              placeholder="Digite seu telefone"
              {...register("telefone")}
            />
            <span className="errorsSpan">{errors.telefone?.message}</span>
            <button type="submit" className="btnCadastrar">
              Cadastrar
            </button>
          </form>
          <div className="divUserExist">
            <span className="spanUserExist">Já tem cadastro?</span>
            <button className="btnBack" onClick={() => navigate("/")}>
              Voltar
            </button>
          </div>
        </div>
      </div>
    </RegContainer>
  );
};
export default Register;
