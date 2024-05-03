import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { signupValidation } from "../SignupAndLoginValidation/SignupValidation";

const Signup = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here, e.g., make API request
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-md p-8 mt-4">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Sign Up
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidation}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting }) => (
            <Form className="space-y-4 max-w-md w-full">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Email Address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email" // Added id attribute
                  className="border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
              {errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password" // Added id attribute
                  className="border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
              {errors.password && (
                <small className="text-red-500">{errors.password}</small>
              )}

              <div className="flex flex-col">
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium mb-2 text-gray-700"
                >
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword" // Added id attribute
                  className="border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                />
              </div>
              {errors.confirmPassword && (
                <small className="text-red-500">{errors.confirmPassword}</small>
              )}
              <br />

              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        {/* Signup form */}

        <p className="text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
