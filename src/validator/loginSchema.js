import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("Campo obrigatório*").email("Email invalido*"),
  password: yup.string().required("Campo obrigatório*"),
});

export default schema;
