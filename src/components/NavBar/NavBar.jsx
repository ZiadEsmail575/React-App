import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'
export default function NavBar() {
  const activeData = [
    {name:"About" , href :"/about"},
    {name:"PORTOFOLIO" , href:"/portofolio"},
    {name:"CONTACT" ,href:"/contact"}
  ];
  // const [active , isActive ]=useState()
  return (
    <>
<nav className={`navbar navbar-expand-lg bg  fixed-top py-4 mb-5 ${style.navbg}`}>
  <div className="container">
    <NavLink className={`navbar-brand fs-2 fw-bolder text-white active`}  to={"/"}>START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        
        <li className="nav-item">
          {activeData.map((item,i)=>(<NavLink key={i} className={({isActive})=>{return `nav-NavLink fw-bold text-white px-3 py-2  text-decoration-none ${isActive ? style.bg:""}`}}  to={item.href}>{item.name}</NavLink>))}
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}
