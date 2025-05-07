import React from "react";
import classes from "./learnMore.module.css";
import { FloatingLabelTextInput } from "../../components/FloatingLabelTextInput";
import { useState } from "react";
import { BadgeCheck, ChevronDown, ChevronRight, Glasses, Globe, Music } from "lucide-react";
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
      <section ref={ref} className={classes.container}>
        <div className={classes.leftContainer}>
          <div className={classes.information}>
            <p className={classes.subtitle}>¡Desliza y encuentra!</p>
            <h3 className={classes.title}>
                  En <span>Feats</span> podras elegir con quién quieres trabajar:
                </h3>
            <div className={classes.informationContainer}>
              <div className={classes.informationTextContainer}>
                <ul>
                  <li>
                    <Glasses className={classes.icon}/>
                    Encuentra a un productor o cantante que te ayude a llevar tu
                    tema al siguiente nivel.
                  </li>
                  <li>
                    <Music className={classes.icon}/>
                    Descubre artistas que trabajan en los mismos géneros
                    musicales que tú… o atrévete a experimentar con algo nuevo.
                  </li>
                  <li>
                    <Globe className={classes.icon}/>
                    No importa de dónde sean: las conexiones que podrás
                    establecer serán globales.
                  </li>
                  <li>
                    <BadgeCheck className={classes.icon}/>
                    No importan tus números, trabajaras con la gente que sabe
                    apreciar tu música
                  </li>
                </ul>
              </div>
              <div className={classes.informationImageContainer}>
                <img
                  src="src/assets/img/example.jpg"
                  className={classes.informationImage}
                />
              </div>
            </div>
            <button
              type="submit"
              className={classes.leftButton}
              onClick={onScrollClick}
            >
              !Quiero saber más!
              <ChevronDown className={classes.downIcon} />
            </button>
          </div>
        </div>

        <div className={classes.rightContainer}>
          <div className={classes.formContainer}>
            <form className={classes.form}>
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

              <div className={classes.roundedSelector}>
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
                <ChevronRight className={classes.rightIcon} />
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
);

export default LearnMore;
