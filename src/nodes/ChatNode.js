import React from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
import { SiChatbot } from "react-icons/si";


const ChatNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      name="Chat"
      icon={<SiChatbot/>}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div>
        <p>This is a Chat node.</p>
      </div>
    </BaseNode>
  );
};

export default ChatNode;
