import { Form, useActionData, useNavigate,redirect } from 'react-router-dom'
import Error from '../Error'
import RegisterForm from '../RegisterForm'
import { addClient } from '../../../api/clientsData'

//action es una funcion que se ejecuta antes de renderizar la vista
export const action= async ({ request }) =>{
  let formData=await request.formData()
  //guardamos los valores de los campos del form en la variable data
  let data=Object.fromEntries(formData)
  //guardamos el email ingresado en el formulario en una variable
  let email=formData.get('email')
  //guardamos los errores en el array errors
  let errors=[]
  //validamos que todos los campos esten llenos
  if(Object.values(data).includes('')){
    errors.push('All the Fields are Required')
  }
  //validamos el email
  let regexEmail=new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])")
  if(!regexEmail.test(email)){
    errors.push('The Email is not Valid')
  }
  //retornar los errores
  if(Object.keys(errors).length){
    return errors
  }
  //agregamos el cliente a la base de datos
  await addClient(data)
  //finalmente redireccionamos a la pagina de clientes
  return redirect('/')
}
//componente
export const NewClient = () => {
  let navigate=useNavigate()
  //importamos los errores si es que hay
  let errors=useActionData()
 
  
  return (
    <div>
        <h1 className='text-center text-4xl font-semibold text-violet-800/90'>
            Let's Sign Up a New Client!
        </h1>
        <div className='flex justify-between'>
        <p className='mt-5 uppercase text-lg font-medium'>Fill all the Fields to Register a new Client</p>
        <button onClick={()=>navigate(-1)}
          className='mt-4 h-7 rounded-md px-10 bg-violet-600 hover:bg-violet-800 hover:transition-opacity hover:text-white hover:duration-300 duration-500 font-semibold text-xl uppercase'>
          Back
        </button>
        </div>
        
        <Form
          method='post'
          noValidate
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
