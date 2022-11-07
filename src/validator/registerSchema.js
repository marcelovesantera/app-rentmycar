import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório*"),
  email: yup.string().required("Email obrigatório*").email("Email inválido*"),
  password: yup
    .string()
    .required("Senha obrigatória*")
    .min(5, "Mínino de 5 caracteres*"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Confirmar senha obrigatória*"),
  telefone: yup
    .string()
    .required("Campo obrigatório*")
    .max(11, "Número com 11 dígitos contando o DDD*")
    .min(11, "Número com 11 dígitos contando o DDD*"),
});
