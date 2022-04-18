import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import toast from "react-hot-toast";

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "",
        error: "",
    });
    const handleEmail = (event) => {
        const emailInput = event.target.value;
        // console.log(emailInput);

        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" });
            // console.log(email.value);
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    };

    const handlePassword = (event) => {
        const passwordInput = event.target.value;

        if (/(?=.*?[A-Z])(?=.*?[0-9])/.test(passwordInput)) {
            setPassword({ value: passwordInput, error: "" });
            // console.log(password.value);
        } else {
            setPassword({ value: "", error: "Please Provide at least one upper case English letter and one digit (0 to 9)" });
        }

    };

    const handleConfirmPassword = (event) => {
        const confirmationInput = event.target.value;

        if (confirmationInput !== password.value) {
            setPasswordConfirmation({ value: "", error: "Password Mismatched" });
        } else {
            setPasswordConfirmation({ value: confirmationInput, error: "" });
        }
    };

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    /*  const handleRegister = async (event) => {
         event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const password = event.target.password.value;
         // const agree = event.target.terms.checked;
 
         await createUserWithEmailAndPassword(email, password);
         await updateProfile({ displayName: name });
         console.log('Updated profile');
         navigate('/home');
     } */
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        // const email = email.value;
        // const password = password.value;
        console.log(email.value, password.value);
        const em = email.value;
        const pa = password.value;
        await createUserWithEmailAndPassword(em, pa);


        await updateProfile({ displayName: name });
        // console.log('Updated profile');
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }} className='text-primary'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input onChange={handleEmail} type="email" name="email" id="" placeholder='Email Address' required />
                {email.error && (
                    <p className='text-danger'>
                        {email.error}
                    </p>
                )}

                <input onChange={handlePassword} type="password" name="password" id="" placeholder='Password' required />
                {password.error && (
                    <p className='text-danger'>
                        {password.error}
                    </p>
                )}

                <input onChange={handleConfirmPassword} type="password" name="confirmPassword" id="" placeholder='ConfirmPassword' required />
                {passwordConfirmation.error && (
                    <p className='text-danger'>
                        {passwordConfirmation.error}
                    </p>
                )}
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Selfie Studio Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;