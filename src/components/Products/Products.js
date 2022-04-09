import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2 className='text-3xl my-3'>Knock Knock !!! Who Is There ??</h2>
            <h5 className='text-2xl'>{user ? user?.displayName : 'Voooot Is hear'}</h5>
        </div>
    );
};

export default Products;