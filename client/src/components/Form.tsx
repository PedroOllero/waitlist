import { ChevronRight } from "lucide-react";
import { Selector } from "./Selector";
import { useState } from "react";
import axios from "axios";
import TextInput from "./FloatingLabelTextInput";
import { z } from "zod";

export const Form: React.FC = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [success, setSuccess] = useState(false);
  const [resetRoles, setResetRoles] = useState(false);

  const schema = z.object({
    email: z.string().email("Introduce un correo válido"),
  });

  const handleSelectRoles = (value: string) => {
    setRoles(value);
    console.log(roles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = schema.safeParse({ email });

    if (!result.success) {
      alert(result.error.format().email?._errors[0]); // muestra el mensaje de error
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:3001/api/waitlist", {
        name,
        email,
        roles,
      });
      if (response.data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setResetRoles(true);
      }
    } catch (err) {
      console.error("Error al enviar datos:", err);
    }
  };

  return (
    <form className="flex flex-col justify-center items-center">
      <h4 className="text-2xl lg:text-4xl lg:mb-10 text-center mb-3">Apuntate a la waitlist</h4>

      <TextInput label="Escribe tu nombre" value={name} onChange={setName} />

      <TextInput label="Escribe tu correo" value={email} onChange={setEmail} />
      <div className="flex justify-around w-75 my-4">
        <Selector
          value="Producer"
          reset={resetRoles}
          onSelect={handleSelectRoles}
        >
          Productor/a
        </Selector>
        <Selector
          value="Singer"
          reset={resetRoles}
          onSelect={handleSelectRoles}
        >
          Cantante
        </Selector>
        <Selector value="Other" reset={resetRoles} onSelect={handleSelectRoles}>
          Otro
        </Selector>
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
