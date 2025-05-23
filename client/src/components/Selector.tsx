import { useState, useEffect } from "react";
interface SelectorProps {
  value: string;
  children?: string;
  onSelect: (value: string) => void;
  reset: boolean;
}

export const Selector: React.FC<SelectorProps> = ({ value, children, onSelect, reset }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsSelected(false);
    }
  }, [reset]);

  const handleSelected = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isSelected) {
      setIsSelected(true);
      onSelect(value);
    } else {
      setIsSelected(false);
      onSelect("");
    }
  };

  return (
    <button
      onClick={handleSelected}
      value={value}
      className={`rounded-4xl py-2 px-4 text-sm transition-all duration-300 ease-in-out ${
        isSelected ? "bg-primary-200 " : "bg-background-200 "
      }`}
    >
      {children}
    </button>
  );
};
