import React, { useEffect } from 'react';
import { Handle, useUpdateNodeInternals } from 'reactflow';

export const BaseNode = ({
  id,
  name,
  icon,
  handles = [],
  children,
}) => {
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);


  return (

    <div
      style={{
        width: 230,
        height: 'fit-content',
        border: '1px solid black',
        borderRadius: '1px',
        backgroundColor: 'white',
      }}
    >
      {handles.map((handle, index) => (
        <div key={`${id}-${index}`}>
          <Handle
            type={handle.type}
            position={handle.position}
            id={handle.id}
            style={{
              width: '8px',
              height: '8px',
              backgroundColor:
                handle.position === 'left'
                  ? '#7C00FE'
                  : '#7C00FE',
            }}
          />
        </div>
      ))}
      <div
        style={{
          borderBottom: '0.5px rgba(60, 21, 115, 1) solid',
          padding: '3px',
          fontSize: '14px',
          fontWeight: '700',
          backgroundColor: '#7C00FE'
        }}
      >
        <div style={{ display: 'flex', gap: '5px', backgroundColor: '#7C00FE', color: 'white', }}>
          {icon}
          {name}
        </div>
      </div>
      <div style={{ padding: '15px 10px 10px 10px' }}>{children}</div>
    </div>
  );
};