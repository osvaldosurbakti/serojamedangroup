import React from 'react';

const InputField = ({ id, label, type, placeholder, value, onChange }) => {
  return (
    <div className="space-y-4">
      <label htmlFor={id} className="text-lg font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
      />
    </div>
  );
};

export default InputField;
