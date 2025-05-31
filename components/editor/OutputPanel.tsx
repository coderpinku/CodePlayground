import { useContext, useEffect, useRef } from 'react';
import { EditorContext } from '@/context/EditorContext';

const OutputPanel = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const { code } = useContext(EditorContext);

  useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    const fullCode = `
      <html>
        <head><style>${code.css}</style></head>
        <body>
          ${code.html}
          <script>${code.js}<\/script>
        </body>
      </html>`;
    if (doc) {
      doc.open();
      doc.write(fullCode);
      doc.close();
    }
  }, [code]);

  return (
    <div className="output-panel border rounded bg-white">
      <h6>Output</h6>
      <iframe ref={iframeRef} className="w-100" style={{ height: '300px' }} />
    </div>
  );
};

export default OutputPanel;
