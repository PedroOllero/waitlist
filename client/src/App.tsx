import { useRef } from "react";
import { LearnMore } from "./screens/learn-more"
import { Hero } from "./screens/hero";
import ExtraInformation from "./screens/extra-information/extra-information";
import Nav from "./screens/nav/nav";

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
      <Hero onScrollClick={handleScroll1} />
      <LearnMore ref={infoRef} onScrollClick={handleScroll2}/>
      <ExtraInformation ref={extrainfoRef}/>
    </div>
  );
};

export default LandingPage;