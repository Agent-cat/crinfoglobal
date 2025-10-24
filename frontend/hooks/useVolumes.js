import { useQuery } from '@tanstack/react-query';
import { listVolumes } from '../utils/api';

export const useVolumes = () => {
  return useQuery({
    queryKey: ['volumes'],
    queryFn: listVolumes,
    staleTime: 10 * 60 * 1000, // 10 minutes - volumes don't change often
  });
};
