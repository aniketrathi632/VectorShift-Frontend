import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
import { MdOutlineUploadFile } from "react-icons/md";


const FileNode = ({ id, data }) => {
  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <BaseNode
      id={id}
      name='File Uploader'
      icon={<MdOutlineUploadFile/>}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div>
        <input
          type="file"
          id="fileUploader"
          name="fileUploader"
          onChange={handleFileChange}
        />
        {file && <p>Selected file: {file.name}</p>}
      </div>
    </BaseNode>
  );
};

export default FileNode;
