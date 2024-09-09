import React from 'react';
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { UserPlusIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required!')
    .min(3, 'Username must be at least 3 characters'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
      .required('Password is required')
});

const Login = () => {
    const navigate =useNavigate();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const userName = values.username;
        toast.success(`Welcome, ${userName}!`);
        resetForm();
        navigate('/home')
      }}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Username is required';
          toast.error('Please enter a username!');
        } else if (values.username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
            toast.error('Username must be at least 3 characters long!');
          }
        if (!values.password) {
            errors.password = 'Password is required';
            toast.error('Please enter your password!');
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
            toast.error('Password must be at least 8 characters long!');
          } else if (!/[A-Z]/.test(values.password)) {
            errors.password = 'Password must contain at least one uppercase letter';
            toast.error('Password must contain at least one uppercase letter!');
          } else if (!/[a-z]/.test(values.password)) {
            errors.password = 'Password must contain at least one lowercase letter';
            toast.error('Password must contain at least one lowercase letter!');
          } else if (!/[0-9]/.test(values.password)) {
            errors.password = 'Password must contain at least one number';
            toast.error('Password must contain at least one number!');
          } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(values.password)) {
            errors.password = 'Password must contain at least one special character';
            toast.error('Password must contain at least one special character!');
          }
        return errors;
      }}
    >
      {() => (
        <div className="flex items-center justify-center min-h-full bg-gray-100 shadow-xl ">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md w-full">
            <div className="flex justify-start mb-6 cursor-pointer lg:justify-center lg:font-semibold">
              <h3 className='font-bold py-2 px-2 bg-slate-400'>RECIPE APP</h3>
            </div>

            <h1 className="text-3xl font-bold text-gray-600 text-center mb-6">
              Discover Delicious Recipes
            </h1>
            <p className="text-gray-500 text-center mb-8">
              Unlock the joy of cooking with step-by-step recipes tailored to your taste. Explore, create, and share your favorite dishes today!
            </p>

            <Form>
              <div className="mb-5">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Username
                </label>
                <Field
                  className="p-3 w-full bg-gray-100 text-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none"
                  type="text"
                  name="username"
                  placeholder="e.g, Johndoe123"
                  autoComplete="given-name"
                />
                
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2 text-left">
                  Password
                </label>
                <Field
                  className="p-3 w-full border bg-gray-100 text-gray-950 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 outline-none"
                  type="password"
                  name="password"
                  placeholder="e.g, Password123"
                />
              </div>
              
            <button
                type="submit"
                className="w-full bg-gray-500 text-xl text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                <span>Login</span>
                <UserPlusIcon className="w-7 h-7" /> 
            </button>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;