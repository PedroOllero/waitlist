import React, { useState } from "react";
import classes from "./FloatingLabelTextInput.module.css";
import { ChevronFirst } from "lucide-react";

interface FloatingLabelTextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FloatingLabelTextInput: React.FC<FloatingLabelTextInputProps> = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const shouldFloat = isFocused || value.length > 0;

  return (
    <div>
      <label>
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default FloatingLabelTextInput;