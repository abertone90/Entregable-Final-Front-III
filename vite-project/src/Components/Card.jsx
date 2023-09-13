
import { Link } from "react-router-dom";
import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Card = ({data: { name, username, id }}) => {

  const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("favs")) ?.some((card) => card.id === id) || false)

  const addFav = ()=>{

    const favs = JSON.parse(localStorage.getItem("favs")) || []

    if(!favs.some((card) => card.id == id)){
      favs.push({ name, username, id })

    localStorage.setItem("favs", JSON.stringify(favs))
    setFavorite(true)
    }else{
      const newFav = favs.filter((card) => card.id !== id)
      localStorage.setItem("favs", JSON.stringify(newFav))
      setFavorite(false)
    }
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src="public\images\doctor.jpg" alt="Image" />
        <h2>{name}</h2>
        <h3>{username}</h3>
        <h4>{id}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </Link>
      <button onClick={addFav} className="favButton">{favorite ? "❤️" : "🤍"}</button>
    </div>

  );
};

export default Card;
