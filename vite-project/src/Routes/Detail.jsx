/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [dentist, setDentist] = useState([])
  const params = useParams();

  const getDentist = async() => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await result.json()
    setDentist(data) 
  }

  useEffect(() => {
    getDentist()

  }, [getDentist, params])

  return (
    <>
      <h1>Detail Dentist {dentist.id} </h1>
      <table>
        <tr><th>Name <td> {dentist.name}</td></th></tr>
        <tr><th>Email <td> {dentist.email}</td></th></tr>
        <tr><th>Phone <td> {dentist.phone}</td></th></tr>
        <tr><th>Website <td> {dentist.websit}</td></th></tr>
      </table>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail