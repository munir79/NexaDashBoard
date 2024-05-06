import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddCoffe from './Component/AddCoffe.jsx'
import UpdateCoffe from './Component/UpdateCoffe.jsx'
import Home from './Page/Home.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader:()=>fetch('http://localhost:5000/coffe'),
    children:[
      {
        path:'/addcoffe',
        element:<AddCoffe></AddCoffe>
      },
      {
        path:'/updatecoffe/:id',
        element:<UpdateCoffe></UpdateCoffe>,
        loader:({params})=>fetch(`http://localhost:5000/coffe/${params.id}`)
      },
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/coffe')

      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
