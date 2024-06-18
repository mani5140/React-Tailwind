import React, { useState } from "react";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault(); 

    if (!file) {
      console.log("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    console.log(formData);
    fetch("your-upload-endpoint-url", { 
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert("Resume uploaded Successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong !!!")
      });
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default ResumeUpload;

