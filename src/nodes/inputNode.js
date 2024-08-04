import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { MdInput } from 'react-icons/md';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      name='Input'
      icon={<MdInput />}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}
    >
      <div style={{ padding: '5px' }}>
        <div style={{ marginBottom: '10px' }}>
          <div style={{border: '1px solid grey', padding:'5px', borderRadius: '8px',width:''}}><label>
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange} 
              style={{ marginLeft: '1px', border:'none', paddingTop:'8px', outline: 'none',}}
            />
          </label>
          </div>
        </div>
        <div>
        <div style={{border: '1px solid grey', padding:'5px', borderRadius: '5px',}}>
          <label>
            Type:
            <select value={inputType} onChange={handleTypeChange} style={{ marginLeft: '5px', border:'none', outline: 'none'}}>
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
