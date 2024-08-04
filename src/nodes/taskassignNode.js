import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { FaTasks } from 'react-icons/fa'; 

export const TaskAssignNode = ({ id, data }) => {
  const [taskName, setTaskName] = useState(data?.taskName || id.replace('customTaskAssign-', 'task_'));
  const [assignee, setAssignee] = useState(data.assignee || '');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      name='Task Assign'
      icon={<FaTasks />}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-task` },
        { type: 'target', position: Position.Left, id: `${id}-task` },
      ]}
    >
      <div style={{ padding: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
        <div style={{border: '1px solid grey', padding:'5px', borderRadius: '8px',width:''}}>
          <label>
            Task Name:
            <input 
              type="text" 
              value={taskName} 
              onChange={handleTaskNameChange} 
              style={{  marginLeft: '1px', border:'none', paddingTop:'8px', outline: 'none', }}
            />
          </label>
          </div>
        </div>
        <div>
        <div style={{border: '1px solid grey', padding:'5px', borderRadius: '5px',}}>
          <label>
            Assignee:
            <input 
              type="text" 
              value={assignee} 
              onChange={handleAssigneeChange} 
              style={{ marginLeft: '5px', border:'none', outline: 'none' }}
            />
          </label>
          </div>
        </div>
      </div>
    </BaseNode>
  );
};
