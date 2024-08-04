import React, { useState } from 'react';

const PdfPreview = ({ pdfUrl }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div style={{ display: 'flex', width: '80%', margin: '0 auto', border: '1px solid #ddd' }}>
      {/* Sidebar (conditionally rendered) */}
      {showSidebar && (
        <div style={{ width: '250px', borderRight: '1px solid #ddd', padding: '10px' }}>
          <h3>Sidebar</h3>
          <p>Additional controls or information here.</p>
        </div>
      )}
      
      {/* PDF Viewer */}
      <div style={{ flex: 1, height: '600px', position: 'relative' }}>
        <iframe
          src={pdfUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none'
          }}
        ></iframe>
      </div>
      
      {/* Toggle Sidebar Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000
        }}
      >
        {showSidebar ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
    </div>
  );
};

export default PdfPreview;