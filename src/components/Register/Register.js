import React from 'react';

const Register = () => {
    return (
        <div>
            <h3 className='text-3xl my-3'>Please Register Now</h3>
            <form>
                <input className='border-2 mb-2' type="text" placeholder='Your Name' />
                <br />
                <input className='border-2 mb-2' type="email" placeholder='Your Email' />
                <br />
                <input className='border-2 mb-2' type="password" name="" id="" placeholder='password' />
                <br />
                <input className='border-2 bg-green-300 p-1' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;