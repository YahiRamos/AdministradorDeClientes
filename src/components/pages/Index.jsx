import { useLoaderData } from "react-router-dom"
import { getClientsData } from "../../../api/clientsData";
import Client from "../Client";

export const loader=()=>{
    const clientsData=getClientsData()
    return clientsData
}
export const Index = () => {
    const clientsData=useLoaderData()
  return (
    <>
        <h1 className='text-4xl font-black text-violet-800/90'>Clients</h1>
        <p className='mt-3 text-xl font-semibold'>Let's Admin Your Clients</p>
        {
            clientsData.length ? (
                <table className="w-full bg-violet-300 shadow-violet-900  shadow-md mt-5 table-auto">
                    <thead className="bg-violet-900 text-white">
                        <tr>
                            <th className="p-2">Client</th>
                            <th className="p-2 border-solid border-x-2 border-violet-300">Contact</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientsData.map(client=>(
                                <Client
                                    client={client}
                                    key={client.id}
                                />
                            )
                            )  
                         }
                    </tbody>
                </table>
            ):(
                <p>There's no Clients Yet</p>
            )
        }
    </>
  )
}
