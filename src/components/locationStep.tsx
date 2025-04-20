import React from 'react';
import { FormData } from '../types';

interface LocationStepProps {
  onNext: () => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const LocationStep: React.FC<LocationStepProps> = ({ onNext, formData, setFormData }) => (
  <div className="flex flex-col min-h-[450px] animate-fadeIn">
    <h2 className="text-2xl font-bold text-primary mb-4">Where Are You Based?</h2>
    <p className="text-gray-600 mb-6">This helps us personalize tool suggestions, currencies, and rewards for you.</p>

    <div className="mb-6">
      <label htmlFor="country" className="block font-semibold mb-2">
        Country
      </label>
      <select
        id="country"
        className="w-full p-3 border border-gray-300 rounded-custom focus:border-primary focus:outline-none"
        value={formData.country || ''}
        onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
      >
        <option value="">Select your country</option>
        {[
          { value: 'US', label: 'United States' },
          { value: 'GB', label: 'United Kingdom' },
          { value: 'CA', label: 'Canada' },
          { value: 'AU', label: 'Australia' },
          { value: 'IN', label: 'India' },
          { value: 'DE', label: 'Germany' },
          { value: 'FR', label: 'France' },
          { value: 'JP', label: 'Japan' },
          { value: 'BR', label: 'Brazil' },
          { value: 'NG', label: 'Nigeria' },
        ].map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>

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
        Skip this step
      </button>
    </div>
  </div>
);

export default LocationStep;