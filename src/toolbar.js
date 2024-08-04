// toolbar.js

import { DraggableNode } from './draggableNode';
import { LuFileInput, LuFileOutput } from "react-icons/lu";
import { SiOpenai, SiChatbot } from "react-icons/si";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineUploadFile, MdOutlineDateRange, MdAssignmentTurnedIn } from "react-icons/md";
import { FaNoteSticky } from "react-icons/fa6";

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' icon={<LuFileInput size={18} />} />
                <DraggableNode type='text' label='Text' icon={<IoDocumentTextOutline size={18} />} />
                <DraggableNode type='llm' label='LLM' icon={<SiOpenai size={18} />} />
                <DraggableNode type='chat' label='ChatBot' icon={<SiChatbot size={18} />} />
                <DraggableNode type='notes' label='Notes' icon={<FaNoteSticky size={18} />} />
                <DraggableNode type='task' label='TaskAssigned' icon={<MdAssignmentTurnedIn size={18} />} />
                <DraggableNode type='file' label='FileUploader' icon={<MdOutlineUploadFile size={18} />} />
                <DraggableNode type='date' label='Date' icon={<MdOutlineDateRange size={18} />} />
                <DraggableNode type='customOutput' label='Output' icon={<LuFileOutput size={18} />} />
            </div>
        </div>
    );
};
