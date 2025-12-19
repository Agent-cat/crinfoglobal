import { useQuery } from '@tanstack/react-query';
import { listVolumes } from '../utils/api';

export const useVolumes = () => {
  return useQuery({
    queryKey: ['volumes'],
    queryFn: async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 Fetching volumes...');
      }
      const data = await listVolumes();
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Volumes fetched:', data?.length || 0, 'items');
      }
      return data;
    },
    staleTime: 0,
  });
};
