import React from "react";
import { useState } from "react";



const Form = ({addOnSubmit}) => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 5 || !validEmail(email)) {
      setError("Por favor verifique su información nuevamente")
    } else {
      setError("Gracias " + nombre + ", te contactaremos cuando antes vía mail")
      addOnSubmit(nombre, email);
    }
  };
  
  const validEmail = (email) => {
    const expresionEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return expresionEmail.test(email)
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <input type="text" placeholder="Ingrese su email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Enviar</button>
        <div>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
