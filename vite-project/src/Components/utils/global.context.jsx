// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer, useEffect } from "react";

export const ContextGlobal = createContext();

const initialState = { theme: "light", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "LIGHT-THEME":
      return { ...state, theme: "light" };

    case "DARK-THEME":
      return { ...state, theme: "dark" };

    case "FETCH_SUCCESS":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Función para cargar datos desde una URL
  const dataApi = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Cargar datos al montar el componente (puedes modificar esto según tus necesidades)
  useEffect(() => {
    const apiUrl = "https://ejemplo.com/api/data"; // Reemplaza con tu URL
    dataApi(apiUrl);
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch, dataApi }}>
      {children}
    </ContextGlobal.Provider>
  );
};
