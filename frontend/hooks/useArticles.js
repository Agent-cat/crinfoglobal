import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  listSubmittedArticles,
  listPublishedArticles,
  publishArticle,
  createAndPublishArticle,
  updateArticle,
  deleteArticle
} from '../utils/api';

// Submitted Articles
export const useSubmittedArticles = () => {
  return useQuery({
    queryKey: ['articles', 'submitted'],
    queryFn: async () => {

      const data = await listSubmittedArticles();

      return data;
    },
    staleTime: 0,
  });
};

// Published Articles
export const usePublishedArticles = () => {
  return useQuery({
    queryKey: ['articles', 'published'],
    queryFn: async () => {

      const data = await listPublishedArticles();

      return data;
    },
    staleTime: 0,
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
// Update Article Mutation
export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ articleId, data }) => updateArticle(articleId, data),
    onSuccess: () => {
      // Invalidate and refetch articles
      queryClient.invalidateQueries({ queryKey: ['articles', 'published'] });
      queryClient.invalidateQueries({ queryKey: ['articles', 'submitted'] });
    },
  });
};

// Delete Article Mutation
export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (articleId) => deleteArticle(articleId),
    onSuccess: () => {
      // Invalidate and refetch articles
      queryClient.invalidateQueries({ queryKey: ['articles', 'published'] });
      queryClient.invalidateQueries({ queryKey: ['articles', 'submitted'] });
    },
  });
};
