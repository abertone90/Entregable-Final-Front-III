// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const favsCards = JSON.parse(localStorage.getItem("favs")) || [];

  const removeFavorite = (id) => {
    const updatedFavs = favsCards.filter((card) => card.id !== id);
    localStorage.setItem("favs", JSON.stringify(updatedFavs));
  };

  return (
    <div className={state.theme === "light" ? "light" : "dark"}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favsCards.length === 0 ? (
          <p>No tienes dentistas favoritos.</p>
        ) : (
          favsCards.map((card) => (
            <Card
              key={card.id}
              data={card}
              onRemoveFavorite={() => removeFavorite(card.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favs;
