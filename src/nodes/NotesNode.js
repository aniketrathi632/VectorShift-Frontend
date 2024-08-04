import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
import TextareaAutosize from 'react-textarea-autosize';
import { FaNoteSticky } from "react-icons/fa6";


const NotesNode = ({ id, data }) => {
  const [notes, setNotes] = useState(data?.notes || 'create notes');

  const handles = [
    { type: 'target', position: Position.Left, id: `${id}-input`, style: { top: '50%' } },
    { type: 'source', position: Position.Right, id: `${id}-output`, style: { top: '50%' } },
  ];

  const handleTextChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <BaseNode id={id} name="Notes" icon={<FaNoteSticky/>} handles={handles}>
      <div style={{ padding: '10px' }}>
        <TextareaAutosize
          value={notes}
          onChange={handleTextChange}
          minRows={5}
          maxRows={10}
          style={{
            width: '100%',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px',
            fontSize: '14px',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </BaseNode>
  );
};

export default NotesNode;
