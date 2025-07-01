import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  feedback: Yup.string().min(10, 'Feedback must be at least 10 characters').required('Feedback is required'),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', feedback: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log('Feedback Submitted:', values)}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Name:</label>
            <Field name="name" placeholder="John Doe" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" placeholder="john@example.com" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Feedback:</label>
            <Field name="feedback" as="textarea" placeholder="Your feedback here..." />
            <ErrorMessage name="feedback" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;