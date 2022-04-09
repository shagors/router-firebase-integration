import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const  auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( () => {
            navigate(from, {replace: true});
        })
    }
    return (
        <div>
            <h2 className='text-3xl my-3'>Please Login</h2>
            <button onClick={handleGoogleSignIn} className='mb-3 border-2 bg-blue-300 p-1'>Google Sign In</button>
            <form>
                <input className='border-2 mb-3' type="email" placeholder='Your Email' />
                <br />
                <input className='border-2 mb-3' type="password" name="" id="" placeholder='password' />
                <br />
                <input className='border-2 bg-blue-300 p-1' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;