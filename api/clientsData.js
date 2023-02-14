export const getClientsData = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL)
  const clientsData = await res.json()
  return clientsData
}

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