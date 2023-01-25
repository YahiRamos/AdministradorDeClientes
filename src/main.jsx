import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Layout from './components/Layout'
import { Index,loader as clientsLoader } from './components/pages/Index'
import { NewClient,action as newClientAction } from './components/pages/NewClient'
import './index.css'

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
        loader:clientsLoader
      },
      {
        path:'/register',
        element:<NewClient/>,
        action: newClientAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router}/>
  </>,
)
