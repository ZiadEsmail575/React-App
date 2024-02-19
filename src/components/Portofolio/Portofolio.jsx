import React, { useState } from "react";
import Modal from "../Modal/modal";
import photo1 from "../../assets/images/poert1.png";
import photo2 from "../../assets/images/port2.png";
import photo3 from "../../assets/images/port3.png";
import style from "./Portofolio.module.css";
const media = [photo1, photo2, photo3, photo1, photo2, photo3];

export default function Portofolio() {
  const [img,setImg]=useState(null);
  // const [show,setShow]=useState(true);
  

  return (
    <>
      <section className="min-vh-100 d-flex align-items-center justify-content-center py-5 position-relative">
        <div className="container">
          <div className="row g-5">
            <div className="portofolioHeader text-center py-5 mt-3">
              <h2 className={`pt-5 fw-bolder fs-1 ${style.portoH2}`}>
                PORTOFOLIO COMPONENT
              </h2>
              <div className={`${style.PortofolioIcon} mb-2  px-2`}>
                <i className={`fa-solid fa-star`}></i>
              </div>
            </div>

            {media.map((ele, i) => (
              <div key={i}  className="col-md-4">
                <div
                  className={`${style.portofolioContainer}`} onClick={()=>setImg(ele)}
                >
                  <div
                    className={`${style.layer} d-flex justify-content-center align-items-center`}
                  >
                    <i className="fa-solid fa-plus fa-6x text-white fw-bolder"></i>
                  </div>
                  <img
                    src={ele}
                    className="w-100"
                    
                    alt="img"
                  />
                  
                  
                </div>
                
              </div>
              
              
              )
              
            )
              }
              
              {img && <Modal className="position-absolute" img={img} setImg={setImg} />}
          </div>
        </div>
        
      </section>
      
      
    </>
  );
}
