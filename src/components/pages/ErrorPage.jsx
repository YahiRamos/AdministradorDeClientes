import {useRouteError} from 'react-router-dom'

export const ErrorPage = () => {
    const error=useRouteError()
  return (
    <div className='space-y-10'>
        <h1 className='text-center text-6xl font-extrabold mt-20 text-violet-900'>Client Adinistrator</h1>
        <p className='text-center'>There's an Error </p>
        <p className='text-center'>{error.statusText || error.message}</p>
    </div>
  )
}
