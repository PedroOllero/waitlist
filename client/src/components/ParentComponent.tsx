
import { useState } from "react";
import { Selector } from "./Selector";

export const ParentComponent: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    console.log("Selected Value:", selectedValue);
  };

  return (
    <div>
      <Selector value="Option 1" onSelect={handleSelect}>Option 1</Selector>
      <Selector value="Option 2" onSelect={handleSelect}>Option 2</Selector>
      <button onClick={handleSubmit} className="mt-4 bg-primary-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};