import React from 'react';

const InputField = ({inputIndex, currenFieldValue, onChange}) => {
  return (
    <div className="mb-6 pr-4" id={`inputField-${inputIndex}`}>
      <label
        htmlFor="NFTName"
        className="block text-sm font-medium text-gray-300"
        id={`inputLabel-${inputIndex}`}
      >
        {inputIndex+1}.
      </label>
      <input
        type="text"
        id={`input-${inputIndex}`}
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        value={currenFieldValue()}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;