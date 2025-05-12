import React from "react";
import { FloatingLabelTextInput } from "../components/FloatingLabelTextInput";
import { useState } from "react";
import { BadgeCheck, ChevronRight, Glasses, Globe, Music } from "lucide-react";
import axios from "axios";
import { PrimaryContainer } from "../components/PrimaryContainer";
import { Selector } from "../components/Selector";
import { Form } from "../components/Form";

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
      className="h-200 flex flex-col py-5 items-center bg-gradient-to-tl from-primary-300 via-primary-200 to-primary-300 text-white"
    >
      <PrimaryContainer className="px-5 py-3 w-[90%]">
        <h3 className="text-2xl text-center">¡Desliza y encuentra!</h3>
        <div>
          <div>
            <ul>
              <li className="flex flex-row my-4">
                <Glasses className="w-10 mr-3" />
                Conoce a artistas que te ayuden a llevar tu tema al siguiente
                nivel.
              </li>
              <li className="flex flex-row my-4">
                <Music className="w-10 mr-3" />
                Descubre gente dentro de tu género musical o atrévete con algo
                nuevo.
              </li>
              <li className="flex flex-row my-4">
                <Globe className="w-8 mr-3" />
                No importa de dónde sean: conecta con todo el mundo
              </li>
              <li className="flex flex-row my-4">
                <BadgeCheck className="w-10 mr-3" />
                No importan tus números, trabajaras con la gente que sabe
                apreciar tu música
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
      <PrimaryContainer className="p-5 w-[90%] bg-background-100 mt-5 z-10">
          <Form/>
      </PrimaryContainer>
    </section>
  );
});

export default LearnMore;
