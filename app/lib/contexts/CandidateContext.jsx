"use client";

import { createContext} from "react";

export const CandidateContext = createContext(null);

export function CandidateProvider({ children, candidate, isLoading, error }) {
  return (
    <CandidateContext.Provider value={{ candidate, isLoading, error }}>
      {children}
    </CandidateContext.Provider>
  );
}
