import { Field, Form, Formik } from "formik";
import React from "react";
import { AddMovieSchema } from "./AddMovieValidation";

const MovieAdd = () => {
  const initialValues = {
    title: "",
    cast: "",
    image: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Here, you can send the movie data to your backend API or perform any other desired action
    console.log(values);
    resetForm();
  };

  return (
    <div className="flex flex-col items-center  justify-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl font-bold mb-4">Add Movie</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={AddMovieSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, setFieldValue }) => (
            <Form className="w-full max-w-md">
              <div className="mb-4">
                <label htmlFor="title" className="block font-bold mb-2">
                  Title
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="w-full px-3 py-2 border border-grey-300 rounded"
                />
              </div>
              {errors.title && (
                <small className="text-red-800">{errors.title}</small>
              )}

              <div className="mb-4">
                <label htmlFor="cast" className="block font-bold mb-2">
                  Cast
                </label>
                <Field
                  type="text"
                  id="cast"
                  name="cast"
                  className="w-full px-3 py-2 border border-grey-300 rounded"
                />
              </div>
              {errors.cast && (
                <small className="text-red-800">{errors.cast}</small>
              )}

              <div className="mb-4">
                <label htmlFor="image" className="block font-bold mb-2">
                  Image
                </label>
                <Field
                  type="file"
                  id="image"
                  name="image"
                  onChange={(event) => {
                    setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  className="w-full px-3 py-2 border border-grey-300 rounded"
                />
              </div>
              {errors.image && (
                <small className="text-red-800">{errors.image}</small>
              )}
              <br />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Movie
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MovieAdd;
