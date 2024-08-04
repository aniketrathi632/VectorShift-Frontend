import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { LuBrainCircuit } from 'react-icons/lu';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      name='LLM'
      icon={<LuBrainCircuit />}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span style={{ fontSize: '14px' }}>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};