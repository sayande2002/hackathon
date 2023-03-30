import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [fields, setFields] = useState();

  return (
    <DataContext.Provider value={{ fields, setFields }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
