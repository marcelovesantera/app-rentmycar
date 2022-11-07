import * as yup from "yup";

export const editUserSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório*").email("Email inválido*"),
  telefone: yup
    .string()
    .required("Campo obrigatório*")
    .max(11, "Número com 11 dígitos contando o DDD*")
    .min(11, "Número com 11 dígitos contando o DDD*"),
});
