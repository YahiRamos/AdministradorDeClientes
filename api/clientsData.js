export const getClientsData = async () => {
  const res = await fetch(import.meta.env.VITE_API_URL)
  const clientsData = await res.json()
  return clientsData
}

export const addClient = async (client) => {
  return console.log(client)
}