import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { useInternetIdentity } from './useInternetIdentity';
import { useEffect, useState } from 'react';

// This would typically be imported from generated declarations
// import { idlFactory } from '../../../declarations/backend';
// import { _SERVICE } from '../../../declarations/backend/backend.did';

// Fallback IDL for development if generation hasn't happened yet
const fallbackIdl = ({ IDL }: any) => {
    return IDL.Service({
        addContact: IDL.Func([IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text], [IDL.Bool], []),
        getAllContacts: IDL.Func([], [IDL.Vec(IDL.Record({
            name: IDL.Text,
            email: IDL.Text,
            company: IDL.Text,
            projectType: IDL.Text,
            message: IDL.Text,
        }))], ['query']),
    });
};

export function useActor() {
    const { identity } = useInternetIdentity();
    const [actor, setActor] = useState<any>(null);

    useEffect(() => {
        const canisterId = (import.meta.env.VITE_BACKEND_CANISTER_ID as string) || (import.meta.env.CANISTER_ID_BACKEND as string) || 'br5f7-7uaaa-aaaaa-qaaca-cai';
        const host = (import.meta.env.VITE_BACKEND_HOST as string) || (import.meta.env.DEV ? 'http://localhost:4943' : 'https://ic0.app');

        const createActor = async (userIdentity?: Identity) => {
            const agent = new HttpAgent({ host, identity: userIdentity });

            if (import.meta.env.DEV) {
                await agent.fetchRootKey().catch((err) => {
                    console.warn('Unable to fetch root key. Check if local replica is running.', err);
                });
            }

            // In a real scenario, use imported idlFactory
            const backendActor = Actor.createActor(fallbackIdl, {
                agent,
                canisterId,
            });

            setActor(backendActor);
        };

        createActor(identity || undefined);
    }, [identity]);

    // Mock actor for development when IC is not reachable
    const mockActor = {
        addContact: async (name: string, email: string, company: string, type: string, msg: string) => {
            console.log('Mock addContact:', { name, email, company, type, msg });
            return new Promise((resolve) => setTimeout(() => resolve(true), 1500));
        },
        getAllContacts: async () => [],
    };

    return { actor: actor || mockActor };
}
