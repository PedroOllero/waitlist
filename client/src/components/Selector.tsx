interface SelectorProps{
    value: string;
    children?: string
}
export const Selector: React.FC <SelectorProps>= ({value, children}) => {
  return <button className="bg-background-200 rounded-4xl py-2 px-4">{children}</button>;
};
