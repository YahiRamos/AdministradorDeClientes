
const RegisterForm = ({clientData}) => {
  return (
    <>
    <div className="mb-4 rounded">
        <label
            className="text-gray-800"
            htmlFor="nombre"
        >Name:</label>
        <input 
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Client Name"
            name="name"
            defaultValue={clientData?.name}
        />
    </div>
    <div className="mb-4 rounded">
        <label
            className="text-gray-800"
            htmlFor="company"
        >Company:</label>
        <input 
            id="company"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Client company"
            name="company"
            defaultValue={clientData?.company}
        />
    </div>

    <div className="mb-4 rounded">
        <label
            className="text-gray-800"
            htmlFor="email"
        >E-mail:</label>
        <input 
            id="email"
            type="email"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Client Email"
            name="email"
            defaultValue={clientData?.email}
        />
    </div>

    <div className="mb-4 rounded">
        <label
            className="text-gray-800"
            htmlFor="phone"
        >Phone:</label>
        <input 
            id="phone"
            type="tel"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Client Phone"
            name="phone"
            defaultValue={clientData?.phone}
        />
    </div>

    <div className="mb-4 rounded">
        <label
            className="text-gray-800"
            htmlFor="notes"
        >Notes:</label>
        <textarea
            as="textarea"
            id="notes"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
            placeholder="Client Notes"
            name="notes"
            defaultValue={clientData?.notes}
        />
    </div>
</>
  )
}

export default RegisterForm