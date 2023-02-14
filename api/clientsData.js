// This file is used to fetch data from the API

//esta funcion es para obtener todos los clientes
export const getClientsData = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL)
  const clientsData = await res.json()
  return clientsData
}
//esta funcion es para obtener un cliente en especifico
export const getClientData = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const clientsData = await res.json()
  return clientsData
}
//esta funcion es para agregar un cliente
export const addClient = async (client) => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    })
    await res.json()    
  } catch (error) {
    console.log(error)
  }
}
//esta funcion es para actualizar un cliente
export const updateClient = async (id,client) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    })
    await res.json()    
  } catch (error) {
    console.log(error)
  }
}
//esta funcion es para eliminar un cliente
export const deleteClient = async (id) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    await res.json()    
  } catch (error) {
    console.log(error)
  }
}