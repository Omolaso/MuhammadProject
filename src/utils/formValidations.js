import * as Yup from "yup";

const passwordRegExp = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const RegisterFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  userName: Yup.string().required("Username is required"),
  role: Yup.number().required("Role is required"),
  password: Yup.string()
    .matches(passwordRegExp, "Password must contain a lowercase and a digit")
    .required("Password is required"),
});

export const LoginFormValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string()
    .matches(passwordRegExp, "Password must contain a lowercase and a digit")
    .required("Password is required"),
});
