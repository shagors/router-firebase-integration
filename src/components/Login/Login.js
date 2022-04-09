import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2 className='text-3xl my-3'>Please Login</h2>
            <button onClick={signInWithGoogle} className='mb-3 border-2 bg-blue-300 p-1'>Google Sign In</button>
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