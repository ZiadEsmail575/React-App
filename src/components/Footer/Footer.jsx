import React from 'react'
import style from  './Footer.module.css'
export default function Footer() {
  return (
    <footer className={`${style.footerbg}  text-white text-center py-5`}>
      <div className="container">
     
        <div className="row">
          <div className="col-md-4">
          <div className={`${style.card}`}>
          <h3 className='mb-2'>LOCATION</h3>
          <p className='mb-4'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        </div>
        <div className="col-md-4">
        <div className={`${style.card}`}>
          <h3 className='mb-2'>AROUND THE WEB</h3>
          <ul className='list-unstyled d-flex justify-content-center align-items-center'>
            <li className={`${style.iconsCircle} d-flex justify-content-center align-items-center me-2`} ><i className="fa-brands fa-facebook"></i></li>
            <li className={`${style.iconsCircle} d-flex justify-content-center align-items-center me-2`}  ><i className="fa-brands fa-twitter"></i></li>
            <li className={`${style.iconsCircle} d-flex justify-content-center align-items-center me-2`} ><i className="fa-brands fa-linkedin-in"></i></li>
            <li className={`${style.iconsCircle} d-flex justify-content-center align-items-center me-2`} ><i className="fa-solid fa-globe"></i></li>
          </ul>
        </div>
        </div>
        <div className="col-md-4">
        <div className={`${style.card}`}>
          <h3>ABOUT FREELANCER</h3>
          <p className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>
          
        </div>
      
      
      </div>
      <p className={`${style.footerParagraph} w-100 p-4`}>Copyright © Your Website 2021</p>
    </footer>
  )
}
