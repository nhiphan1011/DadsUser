import * as yup from "yup";

export const REGISTER_SCHEMA = yup
  .object({
    username: yup.string().required("username is required"),
    email: yup.string().required("email is required").email("invalid email").trim(),
    password: yup.string().required("password is required"),
  })
  .required();
