import React from "react";
import { Formik, Form } from "formik";
import {
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  Button,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { registerUserYalidationSchema } from "./RegisterValidation";

const RegisterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          location: "",
          gender: "",
        }}
        validationSchema={registerUserYalidationSchema}
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
              <Typography variant="h3">Register</Typography>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="First name"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Last name"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
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

              <FormControl>
                <TextField
                  label="Confirm Psaaword"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <FormHelperText error>
                    {formik.errors.confirmPassword}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Location"
                  {...formik.getFieldProps("location")}
                />
                {formik.touched.location && formik.errors.location ? (
                  <FormHelperText error>
                    {formik.errors.location}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select {...formik.getFieldProps("gender")} label="Gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="preferNotToSay">Other</MenuItem>/
                </Select>
                {formik.touched.gender && formik.errors.gender ? (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" color="primary" variant="contained">
                Sign Up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
