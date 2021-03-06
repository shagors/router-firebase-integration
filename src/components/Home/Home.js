import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth =getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl my-4'>Home Page</h2>
            <p>Current user id : {user ? user?.displayName : 'No One Hear'}</p>
        </div>
    );
};

export default Home;