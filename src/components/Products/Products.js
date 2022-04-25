import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Your Products</h2>
            <p>Your product: {user ? user.displayName : 'vooooooooooot'}</p>
        </div>
    );
};

export default Products;