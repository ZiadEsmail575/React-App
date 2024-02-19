
import React from 'react'
import{RouterProvider, createBrowserRouter} from 'react-router-dom'
import LauOut from './components/LayOut/LauOut'
import About from './components/About/About'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Portofolio from './components/Portofolio/Portofolio'
import Contacts from './components/Contacts/Contacts'



export default function App() {
  let routes =createBrowserRouter([{path:"/" ,element:<LauOut/>  ,children:[
    {index:true , element:<Home/>}
    ,{path:"about" , element:<About/>},
    {path:"portofolio" ,element:<Portofolio/>},
    {path:"contact" ,element:<Contacts/>},
    {path:"*" , element:<NotFound/>}
  ]}])
  return <RouterProvider router={routes}></RouterProvider>
}

