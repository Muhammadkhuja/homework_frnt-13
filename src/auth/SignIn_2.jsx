// // import React from "react";
// // import { Button, Input, Form, notification } from "antd";
// // import { useNavigate } from "react-router-dom";
// // import { Notification } from "../utils/noitfication";

// // function SignIn() {
// //   const [api, contextHolder] = notification.useNotification();
// //   const navigate = useNavigate();

// //   const onFinish = (value) => {
// //     const { username, password } = value;
// //     if (username === "admin" && password === "admin01") {
// //       navigate("/logs");
// //     } else {
// //       Notification();
// //     }
// //   };

// //   return (
// //     <div className="w-full h-screen flex items-center justify-center">
// //       {contextHolder}
// //       <div className="w-[40%]  h-[300px]">
// //         <h2 className="text-center text-[30px] my-4">SignIn</h2>
// //         <Form
// //           layout="vertical"
// //           onFinish={onFinish}
// //           className="flex flex-col gap-3"
// //         >
// //           <Form.Item
// //             name="username"
// //             rules={[{ required: true, message: "Please input your username" }]}
// //           >
// //             <Input placeholder="username..." size="large" />
// //           </Form.Item>

// //           <Form.Item
// //             name="password"
// //             rules={[{ required: true, message: "Please input your password" }]}
// //           >
// //             <Input.Password placeholder="password..." size="large" />
// //           </Form.Item>

// //           <Button type="primary" htmlType="submit" size="large">
// //             Submit
// //           </Button>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignIn;

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   username: Yup.string().required("Please enter your username"),
//   password: Yup.string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Please enter your password"),
// });

// const FeedbackForm = () => {
//   return (
//     <Formik
//       initialValues={{ username: "", password: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log("Login Submitted:", values);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label>Username:</label>
//             <Field name="username" />
//             <ErrorMessage
//               name="username"
//               component="div"
//               style={{ color: "red" }}
//             />
//           </div>

//           <div>
//             <label>Password:</label>
//             <Field name="password" type="password" />
//             <ErrorMessage
//               name="password"
//               component="div"
//               style={{ color: "red" }}
//             />
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             Sign In
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default FeedbackForm;

// import React from "react";
// // import { Button, Input, Form, notification } from "antd";
// // import { useNavigate } from "react-router-dom";
// // import { Notification } from "../utils/noitfication";

// // function SignIn() {
// //   const [api, contextHolder] = notification.useNotification();
// //   const navigate = useNavigate();

// //   const onFinish = (value) => {
// //     const { username, password } = value;
// //     if (username === "admin" && password === "admin01") {
// //       navigate("/logs");
// //     } else {
// //       Notification();
// //     }
// //   };

// //   return (
// //     <div className="w-full h-screen flex items-center justify-center">
// //       {contextHolder}
// //       <div className="w-[40%]  h-[300px]">
// //         <h2 className="text-center text-[30px] my-4">SignIn</h2>
// //         <Form
// //           layout="vertical"
// //           onFinish={onFinish}
// //           className="flex flex-col gap-3"
// //         >
// //           <Form.Item
// //             name="username"
// //             rules={[{ required: true, message: "Please input your username" }]}
// //           >
// //             <Input placeholder="username..." size="large" />
// //           </Form.Item>

// //           <Form.Item
// //             name="password"
// //             rules={[{ required: true, message: "Please input your password" }]}
// //           >
// //             <Input.Password placeholder="password..." size="large" />
// //           </Form.Item>

// //           <Button type="primary" htmlType="submit" size="large">
// //             Submit
// //           </Button>
// //         </Form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SignIn;


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