import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { useStore } from './store'; 
import { SubmitButton } from './submit'; 

function App() {
   // Access nodes and edges from Zustand store
   const { nodes, edges } = useStore(state => ({
    nodes: state.nodes,
    edges: state.edges,
}));
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton nodes={nodes} edges={edges} />
    </div>
  );
}

export default App;
