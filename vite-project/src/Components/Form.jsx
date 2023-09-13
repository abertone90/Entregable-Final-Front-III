/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";



// eslint-disable-next-line react/prop-types
const Form = ({addOnSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 5 || !email.includes("@")) {
      setError("Por favor verifique su información nuevamente")
    } else {
      setError("Gracias " + nombre + ", te contactaremos cuando antes vía mail")
      addOnSubmit(nombre, email);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Ingrese su nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} />
        <input type="text" 
        placeholder="Ingrese su email" 
        value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
        <div>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
