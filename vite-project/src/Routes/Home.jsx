// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state, dataApi } = useContext(ContextGlobal);

  useEffect(() => {
    // Cargar datos del dentista al montar el componente
    dataApi("https://jsonplaceholder.typicode.com/users");
  }, [dataApi]);

  return (
    <main className={state.theme === "light" ? "light" : "dark"}>
   
      <div className="card-grid">
        {Array.isArray(state.data) &&
          state.data.map((dentist) => (
            <Card key={dentist.id} data={dentist} />
          ))}
      </div>
    </main>
  );
};

export default Home;
