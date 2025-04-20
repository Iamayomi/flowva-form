import React from 'react';

interface WelcomeStepProps {
  onNext: () => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => (
  <div className="flex flex-col h-[450px] animate-fadeIn">
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-primary mb-4">Welcome to Flowva</h1>
      <p className="text-gray-600 mb-6">
        Your smart library for organizing tools, tracking usage, and turning productivity into rewards. Let's set up your
        digital library in 2 minutes.
      </p>
    </div>
    <div className="flex gap-4 pt-8">
      <button
        className="flex-1 bg-primary text-white py-3 px-6 rounded-custom font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
        onClick={onNext}
      >
        Let's Go
      </button>
    </div>
  </div>
);

export default WelcomeStep;