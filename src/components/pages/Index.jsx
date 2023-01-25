import { useLoaderData } from "react-router-dom"
import Client from "../Client";

export const loader=()=>{
    const clientsData = [
        {
            id: 1,
            name: 'Yahir Ramos',
            phone: 8442937746,
            email: "yahiramoslinks@hotmail.com",
            company: 'Genesis Systems'
        },
        {
            id: 2,
            name: 'Luis',
            phone: 138198313,
            email: "luis@luis.com",
            company: 'business'
        },
        {
            id: 3,
            name: 'Axel',
            phone: 31983913,
            email: "axel@axel.com",
            company: 'business'
        },
        {
            id: 4,
            name: 'Juan',
            phone: 1398198938,
            email: "juan@juan.com",
            company: 'business'
        },
        {
            id: 5,
            name: 'Mirrunguis',
            phone: 1133335555,
            email: "mirrunguis@mow.com",
            company: 'Los Gatitos Inc'
        }
    ];
    return clientsData
}
export const Index = () => {
    const clientsData=useLoaderData()
    console.log(clientsData)
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
