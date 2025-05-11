import { useRef } from "react";
import ExtraInformation from "./screens/extra-information";
import Nav from "./screens/nav";
import LearnMore from "./screens/learnMore";
import Hero from "./screens/hero";

const LandingPage: React.FC = () => {
  const infoRef = useRef<HTMLDivElement | null>(null);
  const extrainfoRef = useRef<HTMLDivElement | null>(null);

  const handleScroll1 = () => {
    infoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll2 = () => {
    extrainfoRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("Scroll to Extra Information");
  };

  return (
    <div className="font-manrope">
      <Nav />
      <Hero />
      <LearnMore/>
      <ExtraInformation ref={extrainfoRef}/>
    </div>
  );
};

export default LandingPage;