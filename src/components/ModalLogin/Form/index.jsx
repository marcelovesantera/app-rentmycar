import { FormContainer } from "./styles";
import { MdAlternateEmail } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../../validator/loginSchema";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { onLogin } = useContext(AuthContext);

  return (
    <FormContainer
      errorEmail={errors.email?.message}
      onSubmit={handleSubmit(onLogin)}
    >
      <MdAlternateEmail className="email" />
      <HiOutlineLockClosed className="password" />
      <input
        type="text"
        placeholder="Digite seu email"
        {...register("email")}
      />
      {errors.email?.message && (
        <span className="span-error">{errors.email?.message}</span>
      )}
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {errors.password?.message && (
        <span className="span-error">{errors.password?.message}</span>
      )}
      <button type="submit" className="btn-form">
        Entrar
      </button>
    </FormContainer>
  );
};

export default Form;
