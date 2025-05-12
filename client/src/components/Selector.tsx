import { useState } from "react";

interface SelectorProps{
    value: string;
    children?: string
}

export const Selector: React.FC <SelectorProps>= ({value, children}) => {
  const [selected, setSelected] = useState("")
  const handleSelected = () => {
      setSelected(value);
  }

  return <button onToggle={handleSelected} value={value} className="bg-background-200 rounded-4xl py-2 px-4 text-sm">{children}</button>;
};
