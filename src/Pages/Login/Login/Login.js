import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const handleEmailLogin = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };
    const handlePasswordLogin = (event) => {
        const passwordInput = event.target.value;

        if (/(?=.*?[A-Z])(?=.*?[0-9])/.test(passwordInput)) {
            setPassword({ value: passwordInput, error: "" });
        } else {
            setPassword({ value: "", error: "Please Provide at least one upper case English letter and one digit (0 to 9)" });
        }

    };



    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
        // const some = toast('Success');

    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    /*     if (emailRef.current.value || passwordRef.current.value === '') {
            const some = toast('Error');
        } */



    const handleSubmit = event => {
        event.preventDefault();


        const ema = email.value;
        const pas = password.value;

        signInWithEmailAndPassword(ema, pas);
    }



    const navigateRegister = event => {
        navigate('/register');
    }

    const e = email.value;

    const resetPassword = async () => {

        console.log(e);

        if (e) {
            await sendPasswordResetEmail(e);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='container w-50 mx-auto register-form'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={handleEmailLogin} type="email" placeholder="Enter email" required />
                    {email.error && (
                        <p className='text-danger'>
                            {email.error}
                        </p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={handlePasswordLogin} type="password" placeholder="Password" required />
                    {password.error && (
                        <p className='text-danger'>
                            {password.error}
                        </p>
                    )}
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Selfie Studio? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;