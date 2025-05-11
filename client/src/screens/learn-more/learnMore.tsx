import React from "react";
import classes from "./learnMore.module.css";
import { FloatingLabelTextInput } from "../../components/FloatingLabelTextInput";
import { useState } from "react";
import {
  BadgeCheck,
  ChevronDown,
  ChevronRight,
  Glasses,
  Globe,
  Music,
} from "lucide-react";
import axios from "axios";
import { PrimaryContainer } from "../../components/FloatingLabelTextInput/PrimaryContainer";
import { Selector } from "../../components/Selector";

interface HeroProps {
  onScrollClick: () => void;
}

const LearnMore = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ onScrollClick }, ref) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:3001/api/waitlist",
          {
            name,
            email,
          }
        );
        if (response.data.success) {
          setSuccess(true);
          setName("");
          setEmail("");
        }
      } catch (err) {
        console.error("Error al enviar datos:", err);
      }
    };

    return (
      <section
        ref={ref}
        className="h-svh flex flex-col justify-between py-5 items-center gap-10 bg-gradient-to-tl from-primary-300 via-primary-200 to-primary-300 text-white"
      >
        <div>
          <PrimaryContainer className="p-5 w-90">
            <h3 className="text-2xl text-center">¡Desliza y encuentra!</h3>
            <div>
              <div>
                <ul>
                  <li className="flex flex-row my-4">
                    <Glasses className="w-10 mr-1" />
                    Conoce a artistas que te ayuden a llevar tu tema al
                    siguiente nivel.
                  </li>
                  <li className="flex flex-row my-4">
                    <Music className="w-10 mr-1" />
                    Descubre gente dentro de tu género musical o atrévete con
                    algo nuevo.
                  </li>
                  <li className="flex flex-row my-4">
                    <Globe className="w-8 mr-1" />
                    No importa de dónde sean: conecta con todo el mundo
                  </li>
                  <li className="flex flex-row my-4">
                    <BadgeCheck className="w-10 mr-1" />
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
        </div>

        <div>
          <PrimaryContainer className="p-5 w-90 bg-background-100">
            <form>
              <h4 className="text-2xl text-center ">Apuntate a la waitlist</h4>

              <FloatingLabelTextInput
                label="Escribe tu nombre"
                value={name}
                onChange={setName}
              />

              <FloatingLabelTextInput
                label="Escribe tu correo"
                value={email}
                onChange={setEmail}
              />

              <div className="flex justify-around">
                <Selector value="Productor">Productor/a</Selector>
                <Selector value="Cantante">Cantante</Selector>
                <Selector value="Otro">Otro</Selector>
              </div>

              <button className="flex w-30 h-10 px-2 m-4 rounded-4xl py-4 justify-center items-center
              text-2xl bg-primary-200 " type="submit" onClick={handleSubmit}>
                Enviar
                <ChevronRight />
              </button>
            </form>
          </PrimaryContainer>
        </div>
      </section>
    );
  }
);

export default LearnMore;
