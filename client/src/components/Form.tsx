import { ChevronRight } from "lucide-react";
import FloatingLabelTextInput from "./FloatingLabelTextInput";
import { Selector } from "./Selector";
import { useState } from "react";
import axios from "axios";

export const Form: React.FC = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/waitlist", {
        name,
        email,
      });
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
    <form className="flex flex-col justify-center items-center">
      <h4 className="text-2xl text-center mb-3">Apuntate a la waitlist</h4>

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
      <div className="flex justify-around w-75 my-4">
        <Selector value="Productor">Productor/a</Selector>
        <Selector value="Cantante">Cantante</Selector>
        <Selector value="Otro">Otro</Selector>
      </div>

      <button
        className="flex w-35 h-10 px-3 py-3 rounded-4xl justify-around items-center
              text-xl bg-primary-200 group hover:bg-primary-300 transition-all duration-500 ease-in-out"
        type="submit"
        onClick={handleSubmit}
      >
        Enviar
        <ChevronRight className="group-hover:translate-x-1 transition-all duration-500 ease-in-out" />
      </button>
    </form>
  );
};
