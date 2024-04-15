import * as yup from "yup";

export const registerProductValidationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required.")
    .trim()
    .max(30, "Name must be at max 30 characters.")
    .min(3, "Name must be atleast 3 characters."),

  address: yup
    .string()
    .required("Address is required.")
    .trim()
    .min(5, "Address must be atleast 5 characters.")
    .max(50, "Address must be at max 50 characters."),

  email: yup
    .string()
    .email("Enter valid email.")
    .required("Email is required.")
    .trim()
    .lowercase()
    .max(50, "Email must be at max 50 characters."),

  password: yup
    .string()
    .required("Password is required.")
    .trim()
    .min(5, "Password must be atleast 5 characters.")
    .max(20, "Password must be at max 20 characters."),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match."),

  gender: yup
    .string()
    .required("Gender is required.")
    .oneOf(["male", "female", "preferNotToSay"]),

  role: yup
    .string()
    .required("Role is required.")
    .oneOf(["user", "buyer", "seller"]),
});
