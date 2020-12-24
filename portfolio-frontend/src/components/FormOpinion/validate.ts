import * as Yup from "yup";

export const validate = {
  name: Yup.string()
    .max(60, "O nome não pode exceder 60 caracteres")
    .required("*O Nome é um campo obrigatório"),
  channel: Yup.string()
    .max(40, "O canal não pode exceder 40 caracteres")
    .required("*O Canal é um campo obrigatório"),
  quote: Yup.string()
    .max(300, "O depoimento não pode exceder aos 300 caracteres")
    .required("*O depoimento é um campo obrigatório"),
};
