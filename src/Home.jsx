import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>This is home section {user &&  user.displayName}</h1>
        </div>
    );
};

export default Home;