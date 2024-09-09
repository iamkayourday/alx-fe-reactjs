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
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                const userName = values.username;
                toast.success(`Welcome, ${userName}!`);
                resetForm();
                navigate('/home');
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
                <div>
                    <div>
                        <div>
                            <h3>RECIPE APP</h3>
                        </div>

                        <h1>Discover Delicious Recipes</h1>
                        <p>
                            Unlock the joy of cooking with step-by-step recipes tailored to your taste. Explore, create, and share your favorite dishes today!
                        </p>

                        <Form>
                            <div>
                                <label htmlFor="username">
                                    Username
                                </label>
                                <Field
                                    type="text"
                                    name="username"
                                    placeholder="e.g, Johndoe123"
                                    autoComplete="given-name"
                                />
                                <label htmlFor="username">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="e.g, Password123"
                                />
                            </div>

                            <button
                                type="submit"
                            >
                                <span>Login</span>
                                <UserPlusIcon />
                            </button>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    );
};

export default Login;
