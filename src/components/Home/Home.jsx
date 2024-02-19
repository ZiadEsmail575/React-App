import React from 'react'
import icon from '../../assets/images/avatar.svg'
import style from './Home.module.css'
export default function Home() {
  return (
    
    <section className={`${style.homebg} ${style.home} d-flex align-items-center`}>
<div className="container">
  <div className="home-content text-center d-flex flex-column justify-content-center align-items-center">
  <div className="home-img">
    <img src={icon} className={`mb-3 ${style.imgWidth}`} alt="" />
  </div>
  <div className="home-description">
<h2 className='mb-4 text-white fw-bolder fs-1'>START FRAMEWORK</h2>
<div className={`${style.homeIcon} mb-2`}><i className={`fa-solid fa-star`}></i></div>
<div className={`homeTitles text-white`}>
  <span>Graphic Artist - </span>
<span>Web Designer - </span>
<span>Illustrator</span>
</div>
  </div>
  </div>
</div>
    </section>
    
  )
}
