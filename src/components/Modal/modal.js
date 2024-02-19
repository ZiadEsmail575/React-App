import style from "./Modal.module.css";

 const Modal = ({img,setImg})=>{

  const handleClick = ()=>{
    document.addEventListener("click" ,(e)=>{
      if (e.target.classList.contains("fa-xmark")) {
        setImg(null);
        
        
      };
    })
    }
return(
<>
<div className={`${style.popUp} rounded-2 overflow-hidden d-flex justify-content-center align-items-center`} onClick={handleClick} >
              <img src={img} className={`${style.popUpImg} w-50`} alt="img"/>
              <i  className={`${style.close} fa-solid fa-xmark`} ></i>
            </div>
</>)
};

export default Modal;