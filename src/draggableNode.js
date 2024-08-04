import React from "react";

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`node ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "100px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#7C00FE",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        fontSize: "14px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 

        padding: "10px",
        textAlign: "center",
      }}
      draggable
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {icon && (
          <div style={{ display: "flex", alignItems: "center" }}>{icon}</div>
        )}
        <span>{label}</span>
      </div>
    </div>
  );
};