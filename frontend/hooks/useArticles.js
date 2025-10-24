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
    queryFn: listSubmittedArticles,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Published Articles
export const usePublishedArticles = () => {
  return useQuery({
    queryKey: ['articles', 'published'],
    queryFn: listPublishedArticles,
    staleTime: 2 * 60 * 1000, // 2 minutes
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
