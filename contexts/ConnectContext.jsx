"use client";

import { createContext, useContext} from "react";

const ConnectContext = createContext(null);

export function ConnectProvider({ isConnected , children }) {
  return (
    <ConnectContext.Provider value={{ isConnected }}>
      {children}
    </ConnectContext.Provider>
  );
}

export function useCandidateConnected(){
  
  const context = useContext(ConnectContext);

  if(!context){
     throw new Error("Candidate connected context not defined");
  }

  return context;
}

