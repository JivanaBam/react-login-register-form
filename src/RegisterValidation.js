import * as yup from "yup";

export const registerUserYalidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter valid email.")
    .required("Email is required.")
    .trim()
    .max(50, "Email must be at max 50 characters.")
    .lowercase(),

  firstName: yup
    .string()
    .required("First name is required.")
    .trim()
    .max(50, "First name must be at max 50 characters.")
    .min(3, "First name must be atleast 3 characters."),

  lastName: yup
    .string()
    .required("Last name is required.")
    .trim()
    .max(50, "Last name must be at max 50 characters.")
    .min(2, "Last name must be atleast 2 characters."),

  password: yup
    .string()
    .required("Password is required.")
    .trim()
    .max(20, "Password must be at max 20 characters.")
    .min(5, "Password must be atleast 5 characters."),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match."),

  location: yup
    .string()
    .required("Location is required.")
    .trim()
    .min(5, "Location must be atleast 5 characters.")
    .max(50, "Location must be at max 50 characters."),

  gender: yup
    .string()
    .oneOf(["male", "female", "preferNotToSay"])
    .required("Gender is required."),
});
