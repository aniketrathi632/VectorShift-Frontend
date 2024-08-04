import React, { useState, useCallback } from "react";
import { Handle, Position } from "reactflow";
import TextareaAutosize from "react-textarea-autosize";
import { useStore } from "../store";
import { BsTextareaT } from "react-icons/bs";
import { BaseNode } from "./BaseNode";

export const TextNode = ({ id, data, isConnectable }) => {
  const [text, setText] = useState(data.text || "{{write_text}}");
  const { updateNodeField, nodes } = useStore((state) => ({
    updateNodeField: state.updateNodeField,
    nodes: state.nodes,
  }));

  // Update node data with the current text
  const handleTextChange = useCallback(
    (event) => {
      const newText = event.target.value;
      setText(newText);
      updateNodeField(id, "text", newText);
    },
    [id, updateNodeField]
  );

  // Extract variables surrounded by double curly brackets
  const extractVariables = (text) => {
    const regex = /{{\s*(\w+)\s*}}/g;
    const variables = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      variables.push(match[1]);
    }
    return variables;
  };

  // Get the variables and create handles dynamically
  const variables = extractVariables(text);

  return (<div>

    <BaseNode id={id} name="Text" icon={<BsTextareaT />} handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` },
      ]}>

      {variables.map((variable, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={variable}
          style={{
            top: `${(100 / (variables.length + 1)) * (index + 1)}%`,
            background: "#7C00FE",
          }}
          isConnectable={isConnectable}
        />
      ))}
      <label>
        <TextareaAutosize
          text
          minRows={5}
          maxRows={50}
          value={text}
          onChange={handleTextChange}
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "0px",
            padding: "5px",
            fontSize: "14px",
            boxSizing: "border-box",
            border: "none",
          }}
        />
      </label>     
    </BaseNode>
  </div>
  );
};