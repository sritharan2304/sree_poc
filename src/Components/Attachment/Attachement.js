import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`file${i + 1}`, selectedFiles[i]);
    }

    // You can now send formData to your server using an HTTP request (e.g., with fetch or axios).
    // Example using fetch:
    /*
    fetch('your-upload-endpoint', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        console.error('Error uploading files:', error);
      });
    */
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
};

export default FileUploadComponent;
