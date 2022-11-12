import React from 'react';

const InputField = ({inputLabel, currenFieldValue, onChange}) => {
  return (
    <div className="mb-6 pr-4" id={`inputField-${inputLabel.toLowerCase().replace(/ /g, '_')}`}>
      <label
        htmlFor="NFTName"
        className="block mb-1 text-sm font-medium text-gray-300"
        id={`inputLabel-${inputLabel.toLowerCase().replace(/ /g, '_')}`}
      >
        {inputLabel}:
      </label>
      <input
        type="text"
        id={`input-${inputLabel.toLowerCase().replace(/ /g, '_')}`}
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        value={currenFieldValue}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;