import React, { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProviders = () => {

    const user = {displayName: 'Sagor Nodi'}

    return (
        <AuthContext.Provider value={user}>
            
        </AuthContext.Provider>
    );
};

export default AuthProviders;