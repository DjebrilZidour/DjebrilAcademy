import React, { useState } from "react";

const PdfPreview = ({ pdfId }) => {
  const generateUrls = (pdfId) => {
    return {
      preview: `https://drive.google.com/file/d/${pdfId}/preview`,
      download: `https://drive.google.com/uc?id=${pdfId}&export=download`,
      print: `https://drive.google.com/viewer?url=https://drive.google.com/uc?id=${pdfId}&export=download`,
    };
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const url = generateUrls(pdfId);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <>
      <div
        className="my-8"
        style={{
          display: "flex",
          width: "80%",
          margin: "0 auto",
          border: "none",
        }}
      >
        {showSidebar && (
          <div
            style={{ width: "250px", borderRight: "none", padding: "10px" }}
          ></div>
        )}

        <div
          style={{
            flex: 1,
            height: "700px",
            position: "relative",
            border: "none",
          }}
        >
          <iframe
            className=" border-none drop-shadow-xl"
            src={url.preview}
            style={{
              width: "100%",
              height: "100%",
              border: "0",
            }}
          ></iframe>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 mt-8">
        <div className="text-white  font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4 bg-green-500">
          <a href={url.download}> download here</a>
        </div>
        
        <button
          onClick={() => window.open(url.print, "_blank")}
          className="text-white  font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 px-4 bg-green-500"
        >
          Print
        </button>
      </div>
    </>
  );
};

export default PdfPreview;
