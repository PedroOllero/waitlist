import React, { useState } from "react";
import { ChevronFirst } from "lucide-react";

interface FloatingLabelTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FloatingLabelTextInput: React.FC<FloatingLabelTextInputProps> = ({
  label,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const shouldFloat = isFocused || value.length > 0;

  return (
    <div className="w-70 relative group m-5">
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

export default FloatingLabelTextInput;
