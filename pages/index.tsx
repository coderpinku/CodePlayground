import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Toolbar from '../components/editor/Toolbar';
import CodeEditor from '../components/editor/CodeEditor';
import OutputPanel from '../components/editor/OutputPanel';
import { EditorProvider, EditorContext } from '../context/EditorContext';
import { useContext } from 'react';
import Head from 'next/head';

const EditorsPanel = () => {
  const { code, setCode } = useContext(EditorContext);

  return (
    <div className="container-fluid h-100 d-flex flex-column">
      {/* Editor Row */}
      <div className="row g-3 flex-grow-1">
        {/* HTML Editor */}
        <div className="col-12 col-md-4 d-flex flex-column">
          <h6 className="text-light mb-1">HTML</h6>
          <div className="editor-box flex-grow-1">
            <CodeEditor
              language="html"
              code={code.html}
              onChange={(value) => setCode({ ...code, html: value || '' })}
            />
          </div>
        </div>

        {/* CSS Editor */}
        <div className="col-12 col-md-4 d-flex flex-column">
          <h6 className="text-light mb-1">CSS</h6>
          <div className="editor-box flex-grow-1">
            <CodeEditor
              language="css"
              code={code.css}
              onChange={(value) => setCode({ ...code, css: value || '' })}
            />
          </div>
        </div>

        {/* JS Editor */}
        <div className="col-12 col-md-4 d-flex flex-column">
          <h6 className="text-light mb-1">JavaScript</h6>
          <div className="editor-box flex-grow-1">
            <CodeEditor
              language="javascript"
              code={code.js}
              onChange={(value) => setCode({ ...code, js: value || '' })}
            />
          </div>
        </div>
      </div>

      {/* Output Panel */}
      <div className="row mt-3">
        <div className="col-12">
          <div className="output-box">
            <OutputPanel />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <>
    <Head>
    <title>CodePlayground – Online Code Editor for HTML, CSS, and JavaScript</title>
    </Head>
    <EditorProvider>
      <Header />
      {/* <Toolbar /> */}
      <main className="container-fluid mt-2 mb-3">
        <EditorsPanel />
      </main>
      {/* <Footer /> */}
    </EditorProvider>
    </>
  );
}
