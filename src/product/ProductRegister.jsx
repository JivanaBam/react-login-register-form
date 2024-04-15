import React from "react";
import { Formik, Form } from "formik";
import { registerProductValidationSchema } from "./productValidation";
import {
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const ProductRegister = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          address: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
          role: "",
        }}
        validationSchema={registerProductValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <Form
              onSubmit={formik.handleSubmit}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "1rem",
                width: "400px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <Typography variant="h3" color="primary">
                Register
              </Typography>

              <FormControl>
                <TextField label="Name" {...formik.getFieldProps("name")} />
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Address"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <FormHelperText error>{formik.errors.address}</FormHelperText>
                ) : null}
              </FormControl>

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

              <FormControl>
                <TextField
                  label="Confirm Password"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <FormHelperText error>
                    {formik.errors.confirmPassword}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select label="Gender" {...formik.getFieldProps("gender")}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="preferNotToSay">Other</MenuItem>
                </Select>
                {formik.touched.gender && formik.errors.gender ? (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select label="Role" {...formik.getFieldProps("role")}>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="buyer">Buyer</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                </Select>
                {formik.touched.role && formik.errors.role ? (
                  <FormHelperText error>{formik.errors.role}</FormHelperText>
                ) : null}
              </FormControl>

              <Button type="submit" color="success" variant="contained">
                Sign up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ProductRegister;
