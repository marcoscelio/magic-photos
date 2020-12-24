import * as Yup from "yup";

export const validate = {
  name: Yup.string()
    .max(60, "O nome não pode exceder 60 caracteres")
    .required("Campo obrigatório"),
  phone: Yup.string()
    .max(40, "O canal não pode exceder 40 caracteres")
    .required("Campo obrigatório"),
  email: Yup.string().email().required("Campo obrigatório"),
  subject: Yup.string()
    .required("Campo obrigatório")
    .min(4, "*O assunto precisa ter no mínimo 4 caracteres"),
  message: Yup.string()
    .max(500, "*O assunto pode ter no máximo 500 caracteres")
    .required("#A Mensagem é um campo obrigatorio#"),
};
