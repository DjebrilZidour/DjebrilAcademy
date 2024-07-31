import React, { useState } from 'react';
import PdfViewer from '../components/PdfViewer';

const LearningProcess = () => {
  const [pdfUrl, setPdfUrl] = useState('sample.pdf');

    return (
        <div className="App">
            <header className="App-header">
                <h1>PDF Preview Example</h1>
            </header>
            <PdfViewer pdfUrl={pdfUrl} />
        </div>
    );
};

export default LearningProcess;
