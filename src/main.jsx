import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import { EditClient,loader as editClientLoader,action as editClientAction } from './components/pages/EditClient'
import { ErrorPage } from './components/pages/ErrorPage'
import { Index,loader as clientsLoader } from './components/pages/Index'
import { NewClient,action as newClientAction } from './components/pages/NewClient'
import './index.css'
import { action as deleteClientAction } from './components/Client'

const router=createBrowserRouter([
  //en cada objeto dentro del arreglo, es una url diferente
  {
    //path va a ser la ruta 
    path:'/',
    //element va a ser lo que va a renderizar la vista de la ruta
    element: <Layout/>,
    children:[
      {
        index:true,
        element:<Index/>,
        errorElement:<ErrorPage/>,
        loader:clientsLoader
      },
      {
        path:'/register',
        element:<NewClient/>,
        action: newClientAction,
        errorElement:<ErrorPage/>
      },
      {
        path:'edit/:clientId',
        element:<EditClient/>,
        loader:editClientLoader,
        action:editClientAction,
        errorElement:<ErrorPage/>
      },
      {
        path:'delete/:clientId',
        action:deleteClientAction,
        errorElement:<ErrorPage/>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
