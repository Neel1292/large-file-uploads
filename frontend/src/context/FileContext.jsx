import { createContext, useContext, useState } from 'react';

const FileContext = createContext();

export const FileProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  const addFile = (file) => {
    setFiles((prev) => [...prev, file]);
  };

  return (
    <FileContext.Provider value={{ files, addFile, setFiles }}>
      {children}
    </FileContext.Provider>
  );
};

export const useFiles = () => useContext(FileContext);
