import React, { useState } from 'react';
import { FormData } from '../types';

interface GoalsStepProps {
  onNext: () => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const GoalsStep: React.FC<GoalsStepProps> = ({ onNext, formData, setFormData }) => {
  const [goalsError, setGoalsError] = useState(false);

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(value) ? prev.goals.filter((g) => g !== value) : [...prev.goals, value],
    }));
  };

  const validate = () => {
    const isGoalsValid = formData.goals.length > 0;
    setGoalsError(!isGoalsValid);
    if (isGoalsValid) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col min-h-[450px] animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary mb-4">What Do You Want to Track or Improve?</h2>
      <p className="text-gray-600 mb-6">This helps us personalize your dashboard and features.</p>

      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Select your goals {goalsError && <span className="text-warning">Please select at least one option</span>}
        </label>
        <div className="flex flex-col gap-3">
          {['Subscription costs', 'Tool usage & engagement', 'Unused/duplicate tools', 'Personalized tool suggestions'].map(
            (goal) => (
              <label key={goal} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="goals"
                  value={goal}
                  checked={formData.goals.includes(goal)}
                  onChange={handleGoalChange}
                />
                {goal}
              </label>
            )
          )}
        </div>
      </div>

      <div className="flex gap-4 pt-8 mt-auto">
        <button
          className="flex-1 bg-primary text-white py-3 px-6 rounded-custom font-semibold hover:bg-primary-light transition-all hover:-translate-y-0.5"
          onClick={validate}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoalsStep;