import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/progressBar';
import WelcomeStep from './components/welcomeStep';
import AboutYouStep from './components/aboutYouStep';
import LocationStep from './components/locationStep';
import ToolStackStep from './components/toolStackStep';
import GoalsStep from './components/goalsStep';
import CompletionPopup from './components/completionPopup';
import { FormData } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const totalSteps = 5;

  const [formData, setFormData] = useState<FormData>({
    role: null,
    work: [],
    workOther: null,
    country: null,
    tools: [],
    goals: [],
    connectedTools: [],
  });

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPopup(true);
      console.log('Onboarding complete with data:', formData);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    // In a real app, redirect to dashboard
    // window.location.href = '/dashboard';
  };

  const steps = [
    <WelcomeStep key="step0" onNext={nextStep} />,
    <AboutYouStep key="step1" onNext={nextStep} formData={formData} setFormData={setFormData} />,
    <LocationStep key="step2" onNext={nextStep} formData={formData} setFormData={setFormData} />,
    <ToolStackStep key="step3" onNext={nextStep} formData={formData} setFormData={setFormData} />,
    <GoalsStep key="step4" onNext={nextStep} formData={formData} setFormData={setFormData} />,
    <div key="step5" className="flex flex-col min-h-[450px] animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary mb-4">Setup Complete!</h2>
      <p className="text-gray-600 mb-6">
        Your Flowva library is ready to use. We'll take you to your dashboard now where you can start organizing your tools
        and tracking your productivity.
      </p>
      <div className="flex gap-4 pt-8 mt-auto">
        <button
          className="flex-1 bg-primary text-white py-3 px-6 rounded-custom font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
          onClick={() => setShowPopup(true)}
        >
          Go to Dashboard
        </button>
      </div>
    </div>,
  ];

  return (
    <div className="max-w-xl mx-auto my-8 p-8 bg-white rounded-custom shadow-custom">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      {steps[currentStep]}
      <CompletionPopup isOpen={showPopup} onClose={closePopup} />
    </div>
  );
};

export default App;