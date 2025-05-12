import React from "react";
import { BadgeCheck, Glasses, Globe, Music } from "lucide-react";
import { PrimaryContainer } from "../components/PrimaryContainer";
import { Form } from "../components/Form";
import { PinkHighlight } from "../components/PinkHighlight";

const LearnMore = React.forwardRef<HTMLDivElement>(() => {
  const handleScrollClick = () => {
    const targetElement = document.getElementById("learnMore"); // Asegúrate de que el ID coincida con el elemento objetivo
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="learnMore"
      className="h-200 lg:h-svh flex flex-col lg:flex-row py-5 lg:justify-around items-center bg-gradient-to-tl from-primary-300 via-primary-200 to-primary-300 text-white"
    >
      <PrimaryContainer className="px-5 py-3 w-[90%] lg:w-[50%] lg:h-[70%]">
        <h3 className="text-2xl lg:text-6xl text-center lg:mb-15">¡Desliza y encuentra!</h3>
        <div>
          <div>
            <ul>
              <li className="flex flex-row my-4">
                <Glasses className="w-10 mr-3" />
                <p>
                  <PinkHighlight>Conoce a artistas</PinkHighlight> que te ayuden
                  a llevar tu tema al siguiente nivel.
                </p>
              </li>
              <li className="flex flex-row my-4">
                <Music className="w-10 mr-3" />
                <p>
                  Descubre gente dentro de{" "}
                  <PinkHighlight> tu género musical </PinkHighlight> o atrévete
                  con algo nuevo.
                </p>
              </li>
              <li className="flex flex-row my-4">
                <Globe className="w-8 mr-3 lg:ml-1" />
                <p className="lg:ml-1">
                  No importa de dónde sean: conecta con{" "}
                  <PinkHighlight> todo el mundo</PinkHighlight>
                </p>
              </li>
              <li className="flex flex-row my-4">
                <BadgeCheck className="w-10 mr-3" />
                <p>
                <PinkHighlight>No importan tus números</PinkHighlight> , trabajaras con la gente que sabe
                  apreciar tu música
                </p>
              </li>
            </ul>
          </div>
          <div>
            {/* <img
                  src="src/assets/img/example.jpg"
                /> */}
          </div>
        </div>
        {/* <button type="submit" onClick={onScrollClick}>
              !Quiero saber más!
              <ChevronDown />
            </button> */}
      </PrimaryContainer>
      <PrimaryContainer className="p-5 w-[90%] lg:w-[30%] bg-background-100 mt-5 z-10">
        <Form />
      </PrimaryContainer>
    </section>
  );
});

export default LearnMore;
