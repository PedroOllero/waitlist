import classes from "./hero.module.css";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onScrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollClick }) => {
  return (
    <section >
      <img
        src="src/assets/img/FeatsLogoIMG.png"
      />
      <div>
        <h1>
          Conecta con <span>Artistas</span>
        </h1>
        <h2>
          Tu próxima canción empieza aquí
        </h2>
      </div>
      <button onClick={onScrollClick}>
        Ver más
        <ChevronDown/>
      </button>
    </section>
  );
};

export default Hero;
