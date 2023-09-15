// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ data: { name, username, id } }) => {
  // Utiliza el operador de nulabilidad (nullish coalescing) para establecer un valor predeterminado.
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("favs"))?.some((card) => card.id === id) || false
  );

  const addFav = () => {
    // Utiliza una función para obtener el array de favoritos desde el almacenamiento local.
    const getFavoritesFromLocalStorage = () => JSON.parse(localStorage.getItem("favs")) || [];

    const favs = getFavoritesFromLocalStorage();

    if (!favs.some((card) => card.id === id)) {
      favs.push({ name, username, id });

      localStorage.setItem("favs", JSON.stringify(favs));
      setFavorite(true);
    } else {
      // Utiliza filter para eliminar el elemento en lugar de crear un nuevo array.
      const newFav = favs.filter((card) => card.id !== id);
      localStorage.setItem("favs", JSON.stringify(newFav));
      setFavorite(false);
    }
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="public/images/doctor.jpg" alt="Image" />
        <h2>{name}</h2>
        <h3>{username}</h3>
        <h4>{id}</h4>
        {/* Agrega comentarios descriptivos cuando sea necesario */}
      </Link>
      <button onClick={addFav} className="favButton">
        {favorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Card;
