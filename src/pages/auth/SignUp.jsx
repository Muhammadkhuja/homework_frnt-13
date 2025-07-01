import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignUp() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    jshshr: "",
    address: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Ism kiritilishi shart"),
    lastName: Yup.string()
      .required("Familiya kiritilishi shart"),
    email: Yup.string()
      .email("Email noto'g'ri formatda")
      .required("Email kiritilishi shart"),
    password: Yup.string()
      .min(6, "Parol kamida 6 ta belgidan iborat bo'lishi kerak")
      .required("Parol kiritilishi shart"),
    jshshr: Yup.string()
      .length(14, "JSHSHR 14 belgidan iborat bo'lishi kerak")
      .required("JSHSHR kiritilishi shart"),
    address: Yup.string()
      .required("Manzil kiritilishi shart"),
  });

  const handleSubmit = (values) => {
    console.log("Form data:", values);
    navigate("/logs");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage name="firstName" component="div" className="text-sm text-red-500 mt-1" />
              </div>

              <div>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <ErrorMessage name="lastName" component="div" className="text-sm text-red-500 mt-1" />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1" />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1" />
              </div>

              <div>
                <Field
                  type="text"
                  name="jshshr"
                  placeholder="JSHSHR"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <ErrorMessage name="jshshr" component="div" className="text-sm text-red-500 mt-1" />
              </div>

              <div>
                <Field
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                <ErrorMessage name="address" component="div" className="text-sm text-red-500 mt-1" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Ro'yxatdan o'tish
              </button>
            </Form>
          )}
        </Formik>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 text-sm text-gray-500 hover:underline"
        >
        -- SignIn --
        </button>
      </div>
    </div>
  );
}

export default SignUp;
