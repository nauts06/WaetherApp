import React, { useState, createContext } from "react";

const PracticeContext = createContext<ContextType | null>(null);

interface ContextType {
  val: string;
  setVal: any;
  capital: string;
  setCapital: any;
}
const PracticeProvider = ({ children }: { children: any }) => {
  const [val, setVal] = useState<any>(null);
  const [capital, setCapital] = useState<any>(null);

  return (
    <PracticeContext.Provider value={{ val, setVal, capital, setCapital }}>
      {children}
    </PracticeContext.Provider>
  );
};

export { PracticeContext, PracticeProvider };
