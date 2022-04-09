import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                <span className='mr-3'>
                    {user?.displayName && user.displayName}
                </span>
                {
                    user?.uid ? 
                    <button onClick={ () => signOut(auth)} className='border-2 p-1'>Signout</button> 
                    :
                    <Link to='/login'>Login</Link>}
            </nav>
        </div>
    );
};

export default Header;