import { useState } from 'react';
import { Position } from 'reactflow';
import { MdOutlineOutput } from 'react-icons/md';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      name='Output'
      icon={<MdOutlineOutput />}
      handles={[{ type: 'target', position: Position.Left, id: `${id}-value` }]}
    >
      <div style={{ padding: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
        <div style={{border: '1px solid grey', padding:'5px', borderRadius: '8px',}}>
          <label>
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange} 
              style={{ marginLeft: '1px', border:'none', paddingTop:'8px', outline: 'none', }}
            />
          </label>
          </div>
        </div>
        <div>
        <div style={{border: '1px solid grey', padding:'5px', borderRadius: '5px',}}>
          <label>
            Type:
            <select value={outputType} onChange={handleTypeChange} style={{ marginLeft: '5px', border:'none', outline: 'none', }}>
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
          </div>
        </div>
      </div>
    </BaseNode>
  );
};