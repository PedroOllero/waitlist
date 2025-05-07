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
      <section ref={ref}>
        <div>
          <div>
            <p>¡Desliza y encuentra!</p>
            <h3>
              En <span>Feats</span> podras elegir con quién quieres trabajar:
            </h3>
            <div>
              <div>
                <ul>
                  <li>
                    <Glasses/>
                    Encuentra a un productor o cantante que te ayude a llevar tu
                    tema al siguiente nivel.
                  </li>
                  <li>
                    <Music/>
                    Descubre artistas que trabajan en los mismos géneros
                    musicales que tú… o atrévete a experimentar con algo nuevo.
                  </li>
                  <li>
                    <Globe/>
                    No importa de dónde sean: las conexiones que podrás
                    establecer serán globales.
                  </li>
                  <li>
                    <BadgeCheck/>
                    No importan tus números, trabajaras con la gente que sabe
                    apreciar tu música
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="src/assets/img/example.jpg"
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={onScrollClick}
            >
              !Quiero saber más!
              <ChevronDown/>
            </button>
          </div>
        </div>

        <div>
          <div>
            <form>
              <h4>Apuntate a la waitlist</h4>

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

              <div>
                <label>
                  <input type="radio" name="role" value="producer" />
                  Productor
                </label>
                <label>
                  <input type="radio" name="role" value="singer" />
                  Cantante
                </label>
                <label>
                  <input type="radio" name="role" value="both" />
                  Otro
                </label>
              </div>

              <button type="submit" onClick={handleSubmit}>
                Enviar
                <ChevronRight/>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
);

export default LearnMore;
