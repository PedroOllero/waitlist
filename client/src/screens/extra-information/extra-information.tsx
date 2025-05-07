import { BicepsFlexed, DollarSign, Unplug } from "lucide-react";
import classes from "./extra-information.module.css";

interface HeroProps {
  ref: React.Ref<HTMLDivElement>;
}

const ExtraInformation: React.FC<HeroProps> = ({ ref }) => {
  return (
    <section ref={ref}>
      <div>
        <h5>
          <Unplug />
          En Feats, dejamos atrás las conexiones por conveniencia
        </h5>
        <p>
          Aquí no importan los números, solo la música. Por eso, al buscar con
          quién colaborar, lo harás de forma anónima.
        </p>
        <p>
          Lo único que cuenta es lo que suena: cuando explores artistas para
          conectar, te guiarás por la música que han creado, no por su perfil ni
          seguidores.
        </p>
        <p>
          Si hay una conexión real, entonces sí: será el momento de hablar de
          vuestro próximo proyecto juntos.
        </p>
      </div>
      <div>
        <h5>
          <BicepsFlexed />
          Una vez conectas, es momento de crear
        </h5>
        <p>
          En el feed de Feats verás cómo los artistas con los que has hecho
          match comparten todo tipo de proyectos: un beat en busca de voz, una
          letra que aún no tiene música, una canción que necesita una
          colaboración, un sample que pide batería… todo tiene cabida.
        </p>
        <p>
          Con tu red de contactos, no solo podrás trabajar más, sino mejor. Más
          proyectos, más calidad, más música.
        </p>
      </div>
      <div>
        <h5>
          <DollarSign />
          Feats es completamente gratuito
        </h5>
        <p>
          Aquí no hace falta dinero para empezar. Puedes usar la plataforma sin
          coste alguno.
        </p>
        <p>
          Dale like a otros artistas, haz match, propón proyectos, chatea y
          colabora… todo sin pagar.
        </p>
        <p>
          Lo único que necesitas son tus ganas de crear música y conectar con
          gente como tú.
        </p>
      </div>
    </section>
  );
};

export default ExtraInformation;
