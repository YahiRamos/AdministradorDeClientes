const Client = ({client}) => {
    //este componente lo puedo reutilizar para otras aplicaciones
    //como en inventarios o asi, solo pasandoles los datos como 
    //objetos y acomodandolos en la siguiente estructura
    //este componente va dentro de el tbody


    const {name,phone,email, company}=client//aqui desestructuramos la data
  return (
    <tr className="">
      <td className="p-5 border-solid border-r-2 border-violet-900">
        <p className="text-xl font-semibold">{name}</p>
        <p>Company: <span>{company}</span></p>
      </td>
      <td className="p-5 border-solid border-r-2 border-violet-900">
        <p className="text-xl font-semibold">Email: <span>{email}</span></p>
        <p>Phone: <span>{phone}</span></p>
      </td>
      <td className="p-5 flex justify-between">
        <button type="button" className="rounded-md px-5 py-2 text-xl uppercase font-semibold bg-cyan-600 duration-300 hover:bg-cyan-800 hover:transition-opacity hover:duration-300 hover:text-gray-300">
            Edit
        </button>
        <button type="button" className="rounded-md px-5 py-2 text-xl uppercase font-semibold bg-red-500 duration-300 hover:bg-red-800 hover:transition-opacity hover:duration-300 hover:text-gray-300">
            Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
