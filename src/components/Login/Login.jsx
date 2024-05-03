import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { loginValidation, signupValidation } from "../SignupAndLoginValidation/SignupValidation";

function Login() {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidation}
          onSubmit={handleSubmit}
        >
          {({ errors,isSubmitting }) => (
            <Form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-2">Email Address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              {errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium mb-2">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="appearance-none rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
              </div>
              {errors.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
              <div className="flex items-center justify-between mb-4">
                <a href="#" className="text-sm text-gray-600 hover:text-indigo-500">Forgot Password?</a>
                <label className="flex items-center">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="w-4 h-4 text-indigo-600 bg-gray-100 rounded border-gray-300 focus:ring-indigo-500 focus:ring-w-2"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                </label>
              </div>
              <div>
                <span>Don't have an account? </span>
                <Link to="/signup">Signup</Link>
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
