import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';
import { Identity } from '@dfinity/agent';

interface InternetIdentityContextType {
    identity: Identity | null;
    isAuthenticated: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    client: AuthClient | null;
}

const InternetIdentityContext = createContext<InternetIdentityContextType | undefined>(undefined);

export const InternetIdentityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [client, setClient] = useState<AuthClient | null>(null);
    const [identity, setIdentity] = useState<Identity | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        AuthClient.create().then(async (authClient) => {
            setClient(authClient);
            const isAuth = await authClient.isAuthenticated();
            if (isAuth) {
                setIdentity(authClient.getIdentity());
                setIsAuthenticated(true);
            }
        });
    }, []);

    const login = async () => {
        if (!client) return;

        await new Promise<void>((resolve, reject) => {
            client.login({
                identityProvider: import.meta.env.VITE_DFX_NETWORK === 'ic'
                    ? 'https://identity.ic0.app/#authorize'
                    : `http://localhost:4943?canisterId=${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}#authorize`,
                onSuccess: () => {
                    setIdentity(client.getIdentity());
                    setIsAuthenticated(true);
                    resolve();
                },
                onError: (error) => {
                    console.error('Login failed:', error);
                    reject(error);
                }
            });
        });
    };

    const logout = async () => {
        if (!client) return;
        await client.logout();
        setIdentity(null);
        setIsAuthenticated(false);
    };

    return (
        <InternetIdentityContext.Provider value={{ identity, isAuthenticated, login, logout, client }}>
            {children}
        </InternetIdentityContext.Provider>
    );
};

export const useInternetIdentity = () => {
    const context = useContext(InternetIdentityContext);
    if (!context) {
        throw new Error('useInternetIdentity must be used within an InternetIdentityProvider');
    }
    return context;
};
