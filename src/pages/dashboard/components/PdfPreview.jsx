import React, { useState } from 'react';

const PdfPreview = ({ pdfUrl }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div className="my-8" style={{ display: 'flex', width: '80%', margin: '0 auto', border:'none'}}>

      {showSidebar && (
        <div style={{ width: '250px', borderRight: 'none', padding: '10px' }}>
          
        </div>
      )}
      
      <div style={{ flex: 1, height: '600px', position: 'relative',border:'none' }}>
        <iframe
        className='rounded-3xl border-none'
          src={pdfUrl}
          style={{
            width: '100%',
            height: '100%',
            border: '0'
          }}
        ></iframe>
      </div>
   
      
    </div>
  );
};

export default PdfPreview;