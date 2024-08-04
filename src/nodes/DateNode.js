import React, { useState } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';
import { MdOutlineDateRange } from "react-icons/md";


// Custom hook to manage date state
const useDateState = (initialStartDate = '', initialEndDate = '') => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
  };
};

const DateNode = ({ id, data }) => {
  // Use custom hook to manage state
  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
  } = useDateState(data?.startDate, data?.endDate);

  return (
    <BaseNode
      id={id}
      name="Date"
      icon={<MdOutlineDateRange />}
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div>
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <br />

        <label htmlFor="endDate">End Date: </label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
    </BaseNode>
  );
};

export default DateNode;
