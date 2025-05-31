import MonacoEditor from '@monaco-editor/react';
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

interface CodeEditorProps {
  language: string;
  code: string;
  onChange: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ language, code, onChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <MonacoEditor
      height="50vh"
      language={language}
      value={code}
      onChange={onChange}
      theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
    />
  );
};

export default CodeEditor;
