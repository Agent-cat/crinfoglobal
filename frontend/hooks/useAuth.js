import { useQuery } from '@tanstack/react-query';
import { checkAuth } from '../utils/api';

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth', 'user'],
    queryFn: checkAuth,
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
