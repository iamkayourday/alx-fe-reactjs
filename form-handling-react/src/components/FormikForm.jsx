import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
});

const FormikForm = () => {
    return (
        <Formik 
            initialValues={{username: '', email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log(values);
                alert('Form submitted successfully!');
                resetForm();  
            }}
        >
            {() => (
                <Form>
                    <h1>Formik Registration Form</h1>
                    
                    <label>Username:</label>
                    <Field type='text' name='username' placeholder="Enter your Username"
                    />
                    <ErrorMessage name='username' component='div' />

                    <label>Email:</label>
                    <Field type='email' name='email' placeholder="Enter your email"/>
                    <ErrorMessage name='email' component='div' />

                    <label>Password:</label>
                    <Field type='password' name='password' placeholder="Enter your Password"/>
                    <ErrorMessage name='password' component='div' />

                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
}

export default FormikForm;
