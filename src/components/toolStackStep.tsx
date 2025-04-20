import React from 'react';
import { FormData } from '../types';

interface ToolStackStepProps {
  onNext: () => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const ToolStackStep: React.FC<ToolStackStepProps> = ({ onNext, formData, setFormData }) => {
  const tools = [
    { name: 'Notion', icon: '📝' },
    { name: 'Trello', icon: '📋' },
    { name: 'Slack', icon: '💬' },
    { name: 'ClickUp', icon: '✅' },
    { name: 'Canva', icon: '🎨' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Figma', icon: '✏️' },
    { name: 'Calendly', icon: '📅' },
  ];

  const toggleTool = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool) ? prev.tools.filter((t) => t !== tool) : [...prev.tools, tool],
    }));
  };

  return (
    <div className="flex flex-col min-h-[450px] animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary mb-4">Your Tool Stack</h2>
      <p className="text-gray-600 mb-6">Which tools are part of your workflow? We'll pre-load and organize them in your library.</p>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className={`flex flex-col items-center p-4 border border-gray-300 rounded-custom cursor-pointer transition-all hover:border-primary hover:-translate-y-0.5 ${
              formData.tools.includes(tool.name) ? 'bg-primary-light border-primary' : ''
            }`}
            onClick={() => toggleTool(tool.name)}
          >
            <span className="text-2xl mb-2">{tool.icon}</span>
            <span>{tool.name}</span>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-6">You can always add more tools later in your library settings.</p>

      <div className="flex gap-4 pt-8 mt-auto">
        <button
          className="flex-1 bg-primary text-white py-3 px-6 rounded-custom font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
          onClick={onNext}
        >
          Continue
        </button>
        <button
          className="text-dark text-sm opacity-70 hover:text-primary hover:opacity-100 transition-colors"
          onClick={onNext}
        >
          Skip – I'll add them later
        </button>
      </div>
    </div>
  );
};

export default ToolStackStep;