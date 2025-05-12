import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { PrimaryContainer } from "../components/PrimaryContainer";
import bgVideo from "../assets/video/bgFeats.mp4";
import { PrimaryButtonContainer } from "../components/PrimaryButtonContainer";

const RotatingWord: React.FC = () => {
  const words = ["cantantes", "productores", "compositores", "letristas"];
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentWord((prevWord) => {
          const currentIndex = words.indexOf(prevWord);
          const nextIndex = (currentIndex + 1) % words.length;
          return words[nextIndex];
        });
        setAnimate(true);
      }, 50);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={animate ? "animate-blurred-fade-in" : ""}>
      {currentWord}
    </span>
  );
};

const Hero: React.FC = () => {
  const handleScrollClick = () => {
    const targetElement = document.getElementById("learnMore"); // Asegúrate de que el ID coincida con el elemento objetivo
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="h-svh flex flex-col justify-center items-center gap-10 bg-black text-white">
      <video
        className="absolute h-svh object-cover z-0"
        src={bgVideo}
        title="video-feats"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <PrimaryContainer className="w-[90%] p-7 justify-center items-center text-center text-4xl z-10">
        <h1 className="h-17">Conecta con</h1>
        <RotatingWord />
        <h2 className="text-lg mt-10 text-background-400">
          Tu próxima canción empieza aquí
        </h2>
      </PrimaryContainer>
      <PrimaryButtonContainer>
        <button
          onClick={handleScrollClick}
          className="w-40 h-10 px-5 py-5 flex justify-around items-center group"
        >
          Ver más
          <ChevronDown className="group-hover:translate-y-1 group-active:translate-y-1 transition-all duration-500 ease-in-out" />
        </button>
      </PrimaryButtonContainer>
    </section>
  );
};

export default Hero;
