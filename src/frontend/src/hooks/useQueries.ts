import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitContact() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: {
            name: string;
            email: string;
            company: string;
            projectType: string;
            message: string;
        }) => {
            if (!actor) throw new Error('Actor not initialized');
            return actor.addContact(
                data.name,
                data.email,
                data.company,
                data.projectType,
                data.message
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['contacts'] });
        },
    });
}
