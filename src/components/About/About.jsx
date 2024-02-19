import React from 'react'
import style from  './About.module.css';
export default function About() {
  return (
    <>
    <section className={`${style.aboutBg} d-flex align-items-center min-vh-100 text-white`}>
      <div className="container text-center">
        <h2 className='mb-2'>ABOUT COMPONENT</h2>
        <div className={`${style.AboutIcon} mb-4`}><i className={`fa-solid fa-star`}></i></div>
        <div className="aboutParagraph d-flex justify-content-center align-items-center">
          <p className='w-50 me-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className='w-50'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
      </div>
    </section>
    </>
  )
}
