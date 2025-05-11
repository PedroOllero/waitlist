import { BicepsFlexed, DollarSign, Unplug } from "lucide-react";
import { PrimaryContainer } from "../../components/FloatingLabelTextInput/PrimaryContainer";

interface HeroProps {
  ref: React.Ref<HTMLDivElement>;
}

const ExtraInformation: React.FC<HeroProps> = ({ ref }) => {
  return (
    <section ref={ref} className=" flex flex-col px-3 py-5 gap-5 bg-gradient-to-tl from-background-100 via-background-300 to-background-200 text-white">
      <PrimaryContainer className="p-5">
        <h5 className="text-lg mb-3 flex">
          <Unplug size={50} className="mr-4"/>
          En Feats, dejamos atrás las conexiones por conveniencia
        </h5>
        <p className="mb-5">
          Aquí no importan los números, solo la música. Por eso, al buscar con
          quién colaborar, lo harás de forma anónima.
        </p>
        <p  className="mb-5">
          Lo único que cuenta es lo que suena: cuando explores artistas para
          conectar, te guiarás por la música que han creado, no por su perfil ni
          seguidores.
        </p>
        <p  className="mb-5">
          Si hay una conexión real, entonces sí: será el momento de hablar de
          vuestro próximo proyecto juntos.
        </p>
      </PrimaryContainer>
      <PrimaryContainer className="p-5">
        <h5 className="text-lg mb-3 flex">
          <BicepsFlexed  size={50} className="mr-4" />
          Una vez conectas, es momento de crear
        </h5>
        <p  className="mb-5">
          En el feed de Feats verás cómo los artistas con los que has hecho
          match comparten todo tipo de proyectos: un beat en busca de voz, una
          letra que aún no tiene música, una canción que necesita una
          colaboración, un sample que pide batería… todo tiene cabida.
        </p>
        <p  className="mb-5">
          Con tu red de contactos, no solo podrás trabajar más, sino mejor. Más
          proyectos, más calidad, más música.
        </p>
      </PrimaryContainer>
      <PrimaryContainer className="p-3">
        <h5 className="text-lg mb-3 flex">
          <DollarSign  size={50} className="mr-4"/>
          Disfruta de Feats sin tener que pagar nada
        </h5>
        <p  className="mb-5">
          Aquí no hace falta dinero para empezar. Puedes usar la plataforma sin
          coste alguno.
        </p>
        <p  className="mb-5">
          Dale like a otros artistas, haz match, propón proyectos, chatea y
          colabora… todo sin pagar.
        </p>
        <p  className="mb-5">
          Lo único que necesitas son tus ganas de crear música y conectar con
          gente como tú.
        </p>
      </PrimaryContainer>
    </section>
  );
};

export default ExtraInformation;
