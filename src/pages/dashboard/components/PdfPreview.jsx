import React from 'react';

const PdfPreview = ({ pdfUrl }) => {
  return (
    <div style={{ width: '80%', height: '600px', margin: '0 auto', border: '1px solid #ddd' }}>
      <iframe
        src={pdfUrl}
        frameBorder="0"
        style={{ width: '100%', height: '100%', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default PdfPreview;