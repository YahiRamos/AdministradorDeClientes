import { Form, useActionData, useNavigate } from 'react-router-dom'
import Error from '../Error'
import RegisterForm from '../RegisterForm'

export const action= async ({ request }) =>{
  let formData=await request.formData()
  //guardamos los valores de los campos del form en la variable data
  let data=Object.fromEntries(formData)

  //validamos
  let errors=[]
  if(Object.values(data).includes('')){
    errors.push('All the Fields are Required')
  }
  //retornar los errores
  if(Object.keys(errors).length){
    return errors
  }
  //retornamos los datos
 // return data
}

export const NewClient = () => {
  let navigate=useNavigate()
  let errors=useActionData()
  
  return (
    <div>
        <h1 className='text-center text-4xl font-semibold text-violet-800/90'>
            Let's Sign Up a New Client!
        </h1>
        <div className='flex justify-between'>
        <p className='mt-5 uppercase text-lg font-medium'>Fill the Fields to Register a new Client</p>
        <button onClick={()=>navigate(-1)}
          className='mt-4 h-7 rounded-md px-10 bg-violet-600 hover:bg-violet-800 hover:transition-opacity hover:text-white hover:duration-300 duration-500 font-semibold text-xl uppercase'>
          Back
        </button>
        </div>
        
        <Form
          method='post'
        >
          <div className='bg-violet-300 shadow rounded-md md:w-3/4 mx-auto px-5 py-5 font-Rubik font-semibold mt-10'>
            {errors?.length && errors.map((error,index)=>{
              return <Error key={index}>{error}</Error>
            })}
            <RegisterForm/>
            <input
              type={'submit'}
              className='mt-4 cursor-pointer w-full py-3 rounded-md px-10 bg-violet-600 hover:bg-violet-800 hover:transition-opacity hover:text-white hover:duration-300 duration-500 font-semibold text-xl uppercase'
              value={'Register Client'}
            />
          </div>
        </Form>
    </div>
  )
}
