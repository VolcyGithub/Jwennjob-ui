"use client";

import { createContext, useContext} from "react";

const CandidateContext = createContext(null);

export function CandidateProvider({ children, candidate, isLoading, error }) {
  return (
    <CandidateContext.Provider value={{ candidate, isLoading, error }}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidateAuth(){
  
  const context = useContext(CandidateContext);
  if(!context){
     throw new Error("Context not defined");
  }
  return context;
}

