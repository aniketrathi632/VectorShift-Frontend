import React from 'react';

export const SubmitButton = ({ nodes, edges }) => {
    const handleSubmit = async () => {
        const response = await fetch('http://localhost:8000/pipelines/parse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                pipeline: JSON.stringify({ nodes, edges }),
            }),
        });

        const data = await response.json();
        alert(`Number of nodes: ${data.num_nodes}\nNumber of edges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="button" onClick={handleSubmit} style={{
                background:
                    '#7C00FE',
                color: 'white',
                width: '100px',
                padding: '10px',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                border: 'none',
            }}>Submit</button>
        </div>
    );
}
