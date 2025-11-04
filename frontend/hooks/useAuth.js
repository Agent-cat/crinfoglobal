import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '../utils/api';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth', 'user'],
    queryFn: async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 Checking authentication...');
      }
      const data = await checkAuth();
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Auth check complete:', data?.email || 'No user');
      }
      return data;
    },
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
