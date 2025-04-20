import React from 'react';

interface CompletionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompletionPopup: React.FC<CompletionPopupProps> = ({ isOpen, onClose }) => (
  <>
    <div className={`overlay ${isOpen ? 'active' : ''}`}></div>
    <div className={`completion-popup bg-white p-8 rounded-custom shadow-custom text-center ${isOpen ? 'active' : ''}`}>
      <h2 className="text-2xl font-bold text-primary mb-4">Onboarding Complete!</h2>
      <p className="text-gray-600 mb-6">Taking you to your dashboard now.</p>
      <button
        className="bg-primary text-white py-3 px-6 rounded-custom font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
        onClick={onClose}
      >
        OK
      </button>
    </div>
  </>
);

export default CompletionPopup;