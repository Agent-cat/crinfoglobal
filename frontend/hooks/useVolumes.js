import { useQuery } from '@tanstack/react-query';
import { listVolumes } from '../utils/api';

export const useVolumes = () => {
  return useQuery({
    queryKey: ['volumes'],
    queryFn: async () => {

      const data = await listVolumes();

      return data;
    },
    staleTime: 0,
  });
};
