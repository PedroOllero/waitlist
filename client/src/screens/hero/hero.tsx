import classes from "./hero.module.css";
import { ChevronDown } from "lucide-react";

interface HeroProps {
  onScrollClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollClick }) => {
  return (
    <section className={classes.container}>
      <img
        className={classes.logoImage}
        src="src/assets/img/FeatsLogoIMG.png"
      />
      <div className={classes.textContainer}>
        <h1 className={classes.title}>
          Conecta con <span className={classes.highlight}>Artistas</span>
        </h1>
        <h2 className={classes.subtitle}>
          Tu próxima canción empieza aquí
        </h2>
      </div>
      <button className={classes.button} onClick={onScrollClick}>
        Ver más
        <ChevronDown className={classes.downIcon} />
      </button>
    </section>
  );
};

export default Hero;
