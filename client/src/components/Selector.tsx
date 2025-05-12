import { useState } from "react";
interface SelectorProps{
    value: string;
    children?: string
}

export const Selector: React.FC <SelectorProps>= ({value, children}) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelected = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(!isSelected){
      setIsSelected(true)
    }else{
      setIsSelected(false)
    }
  }

  console.log("Selecciones", value, isSelected)

  return <button onClick={handleSelected} value={value} className={`rounded-4xl py-2 px-4 text-sm transition-all duration-300 ease-in-out ${isSelected ? "bg-primary-200 " : "bg-background-200 "}`}>{children}</button>;
};
