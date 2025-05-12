import React from "react";

interface FloatingLabelTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<FloatingLabelTextInputProps> = ({
  label,
  value,
  onChange,
}) => {

  return (
    <div className="w-70 relative group m-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        className="w-full aboslute h-12 top-10 px-4 text-sm peer bg-background-200 rounded-4xl border border-primary-200 outline-none"
      />
    </div>
  );
};

export default TextInput;
