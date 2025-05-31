import { createContext, useState } from 'react';

interface CodeContextType {
  code: {
    html: string;
    css: string;
    js: string;
  };
  setCode: React.Dispatch<React.SetStateAction<{
    html: string;
    css: string;
    js: string;
  }>>;
}

export const EditorContext = createContext<CodeContextType>({
  code: { html: '', css: '', js: '' },
  setCode: () => {}
});

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [code, setCode] = useState({ html: '', css: '', js: '' });

  return (
    <EditorContext.Provider value={{ code, setCode }}>
      {children}
    </EditorContext.Provider>
  );
};
