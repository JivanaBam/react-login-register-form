import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";

const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Enter valid email.")
            .required("Email is required.")
            .trim()
            .max(50, "Email must be at max 50 characters.")
            .lowercase(),

          password: yup
            .string()
            .required("Password is required.")
            .trim()
            .max(50, "Password must be at max 50 characters.")
            .min(5, "Password must be atleast 5 characters."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <Form
              onSubmit={formik.handleSubmit}
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                gap: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h3"> Login</Typography>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" color="primary" variant="contained">
                Sign in
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
