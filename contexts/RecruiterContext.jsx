"use client";

import { createContext, useContext} from "react";

const RecruiterContext = createContext(null);

export function RecruiterProvider({ children, recruiter, isLoading, error }) {
  return (
    <RecruiterContext.Provider value={{ recruiter, isLoading, error }}>
      {children}
    </RecruiterContext.Provider>
  );
}

export function useRecruiterAuth(){
  
  const context = useContext(RecruiterContext);
  
  if(!context){
     throw new Error("Context not defined");
  }
  return context;
}

