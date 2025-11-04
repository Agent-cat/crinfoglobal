"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';

export default function Providers({ children }) {
  // Use useRef to ensure QueryClient is only created once per client session
  const queryClientRef = useRef(null);
  
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          // Data is considered fresh for 5 minutes
          staleTime: 5 * 60 * 1000,
          // Data stays in cache for 10 minutes after becoming unused
          gcTime: 10 * 60 * 1000,
          // Retry failed requests twice
          retry: 2,
          // Don't refetch on window focus
          refetchOnWindowFocus: false,
          // Don't refetch on mount if data is still fresh
          refetchOnMount: false,
          // Don't refetch on reconnect if data is still fresh
          refetchOnReconnect: false,
        },
      },
    });
    
    // Log when QueryClient is created (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('🔵 TanStack Query: QueryClient created');
    }
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
}
