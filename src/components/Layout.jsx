import { Link, Outlet,useLocation } from 'react-router-dom'

const Layout = () => {
  //usamos useLocation para saber en que ruta estamos
  let location=useLocation()
  return (
    <div className='md:flex md:min-h-screen font-Rubik'>
      <aside className='md:w-2/12 bg-violet-800/90 py-5 text-white'>
        <h2 className='text-2xl font-semibold text-center'>
          Client Administrator
        </h2>
        <nav className='mt-7 font-semibold text-center '>
          <Link to={'/'} className=
          {`${location.pathname === '/' ? 
          'bg-violet-900 py-5 block' : 
          'py-5 hover:bg-violet-900 block rounded-sm hover:transition-colors hover:duration-400'}`}>
            Clients
          </Link>
          
          <Link to={'/register'} 
          className={`${location.pathname === '/register' ? 
          'bg-violet-900 py-5 block' : 
          'py-5 hover:bg-violet-900 block rounded-sm hover:transition-colors hover:duration-400'}`}>
            New Client
          </Link>
        </nav>
      </aside>
      <main className='md:w-10/12 p-7 md:h-screen overflow-scroll'>
        <Outlet/>
      </main>
    </div>
  ) 
}

export default Layout