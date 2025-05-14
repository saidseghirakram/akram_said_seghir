import React, { createContext, useContext, useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import PageLoader from '@/components/layout/PageLoader';

interface LoadingContextType {
  startLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider value={{ startLoading }}>
      <AnimatePresence mode="wait">
        {isLoading && <PageLoader onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!isLoading && children}
    </LoadingContext.Provider>
  );
}; 