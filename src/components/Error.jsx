const Error = ({children}) => {
  return (
    <div className="bg-red-700 text-white text-center my-2 uppercase p-3 font-semibold rounded-md">
        {children}
    </div>
  )
}

export default Error