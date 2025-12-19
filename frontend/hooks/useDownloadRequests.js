import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  listDownloadRequests,
  approveDownloadRequest,
  denyDownloadRequest
} from '../utils/api';

export const useDownloadRequests = () => {
  return useQuery({
    queryKey: ['downloadRequests'],
    queryFn: async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 Fetching download requests...');
      }
      const data = await listDownloadRequests();
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Download requests fetched:', data?.length || 0, 'items');
      }
      return data;
    },
    staleTime: 0,
  });
};

export const useApproveDownloadRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId) => approveDownloadRequest(requestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['downloadRequests'] });
    },
  });
};

export const useDenyDownloadRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestId) => denyDownloadRequest(requestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['downloadRequests'] });
    },
  });
};
