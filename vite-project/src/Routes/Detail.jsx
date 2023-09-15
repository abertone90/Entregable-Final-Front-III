// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const [dentist, setDentist] = useState([]);
  const params = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDentist = async () => {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await result.json();
      setDentist(data);
    } catch (error) {
      console.error('Error fetching dentist data:', error);
    }
  };

  useEffect(() => {
    getDentist();
  }, [getDentist, params.id]);

  return (
    <div className={state.theme === 'light' ? 'light' : 'dark'}>
      <h1>Detalle del Dentista {dentist.id}</h1>
      <table>
        <tbody>
          <tr>
            <th>Nombre</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Teléfono</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Sitio Web</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
