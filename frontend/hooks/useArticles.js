import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  listSubmittedArticles, 
  listPublishedArticles, 
  publishArticle,
  createAndPublishArticle 
} from '../utils/api';

// Submitted Articles
export const useSubmittedArticles = () => {
  return useQuery({
    queryKey: ['articles', 'submitted'],
    queryFn: async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 Fetching submitted articles...');
      }
      const data = await listSubmittedArticles();
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Submitted articles fetched:', data?.length || 0, 'items');
      }
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes (match global default)
  });
};

// Published Articles
export const usePublishedArticles = () => {
  return useQuery({
    queryKey: ['articles', 'published'],
    queryFn: async () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🔄 Fetching published articles...');
      }
      const data = await listPublishedArticles();
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Published articles fetched:', data?.length || 0, 'items');
      }
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes (match global default)
  });
};

// Publish Article Mutation
export const usePublishArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ articleId, issueId }) => publishArticle(articleId, issueId),
    onSuccess: () => {
      // Invalidate and refetch articles
      queryClient.invalidateQueries({ queryKey: ['articles', 'submitted'] });
      queryClient.invalidateQueries({ queryKey: ['articles', 'published'] });
    },
  });
};

// Create and Publish Article Mutation
export const useCreateAndPublishArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (formData) => createAndPublishArticle(formData),
    onSuccess: () => {
      // Invalidate and refetch published articles
      queryClient.invalidateQueries({ queryKey: ['articles', 'published'] });
    },
  });
};
