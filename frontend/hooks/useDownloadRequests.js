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

      const data = await listDownloadRequests();

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
