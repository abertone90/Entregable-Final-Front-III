// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ addOnSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const isNombreValid = nombre.length >= 5;
    const isEmailValid = email.includes("@");

    if (!isNombreValid && !isEmailValid) {
      setError("Por favor ingrese un nombre válido y un correo electrónico válido.");
    } else if (!isNombreValid) {
      setError("Por favor ingrese un nombre válido (al menos 5 caracteres).");
    } else if (!isEmailValid) {
      setError("Por favor ingrese un correo electrónico válido.");
    } else {
      setError("Gracias " + nombre + ", te contactaremos pronto vía correo electrónico.");
      addOnSubmit(nombre, email);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese su correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
        <div>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
