import React, { useState } from 'react';
import { FormData } from '../types';

interface AboutYouStepProps {
  onNext: () => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const AboutYouStep: React.FC<AboutYouStepProps> = ({ onNext, formData, setFormData }) => {
  const [roleError, setRoleError] = useState(false);
  const [workError, setWorkError] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(formData.work.includes('Other'));

  const handleWorkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => {
      let newWork = prev.work.includes(value) ? prev.work.filter((item) => item !== value) : [...prev.work, value];
      if (value === 'Other' && !e.target.checked) {
        setShowOtherInput(false);
        return { ...prev, work: newWork, workOther: null };
      } else if (value === 'Other' && e.target.checked) {
        setShowOtherInput(true);
      }
      return { ...prev, work: newWork };
    });
  };

  const validate = () => {
    const isRoleValid = !!formData.role;
    const isWorkValid = formData.work.length > 0;
    setRoleError(!isRoleValid);
    setWorkError(!isWorkValid);
    if (isRoleValid && isWorkValid) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col min-h-[450px] animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary mb-4">About You</h2>
      <p className="text-gray-600 mb-6">Help us tailor your library by telling us a bit about yourself.</p>

      <div className="mb-6">
        <label className="block font-semibold mb-2">
          What best describes you? {roleError && <span className="text-warning">Please select an option</span>}
        </label>
        <div className="flex flex-col gap-3">
          {['Freelancer', 'Solo entrepreneur', 'Small team', 'Creator'].map((role) => (
            <label key={role} className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value={role}
                checked={formData.role === role}
                onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                required
              />
              {role}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">
          What kind of work do you do? {workError && <span className="text-warning">Please select at least one option</span>}
        </label>
        <div className="flex flex-col gap-3">
          {['Design', 'Development', 'Writing', 'Marketing', 'Other'].map((work) => (
            <label key={work} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="work"
                value={work}
                checked={formData.work.includes(work)}
                onChange={handleWorkChange}
              />
              {work}
            </label>
          ))}
          {showOtherInput && (
            <input
              type="text"
              className="mt-2 w-full p-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
              placeholder="Please specify"
              value={formData.workOther || ''}
              onChange={(e) => setFormData((prev) => ({ ...prev, workOther: e.target.value }))}
            />
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

export default AboutYouStep;