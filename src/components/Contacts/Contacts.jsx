import React, { useState } from 'react'
import style from "./Contact.module.css"
export default function Contacts() {
    const[classname,setClassname] = useState(
        {
            name:false,
            email:false,
            age:false,
            password:false
        }
    );
    
    

    function Focus (e){
        setClassname({
            ...classname,
            [e.target.name]:true
        })
    
    };
    function Blur(e){
        setClassname({
            ...classname,
            [e.target.name]:true
        })


    }
    
    

return (
    <>
    <section className='vh-100  d-flex flex-column align-items-center justify-content-center  contacts'>
    
        
        <div className={`${style.floatingContainer}`}>
            <label htmlFor="Name" className={classname ? `${style.floatingLabels}` : ''}>username :</label>
            <input  type="text" id='Name' name='name' className={`${style.floatingInput}`} onFocus={Focus} onBlur={Blur}  />
        </div>

        <div className={`${style.floatingContainer} `}>
            <label htmlFor="email" className={classname ? `${style.floatingLabels}` : ''}>useremail :</label>
            <input  type="email" id='email' name='email' className={`${style.floatingInput}`} onFocus={Focus} onBlur={Blur}/>
        </div>

        <div className={`${style.floatingContainer} `}>
            <label htmlFor="age" className={classname ? `${style.floatingLabels}` : ''}>userage :</label>
            <input  type="number" id='age' name='age'  className={`${style.floatingInput}`} onFocus={Focus} onBlur={Blur}/>
        </div>

        <div className={`${style.floatingContainer} `}>
            <label htmlFor="password" className={classname ? `${style.floatingLabels}` : ''}>userpassword :</label>
            <input  type="password"  id='password' name='password' className={`${style.floatingInput} `} onFocus={Focus} onBlur={Blur}/>
        </div>
        <button className='btn btn-success d-block ms-0'> send message</button>
        

    </section>
    </>
)
}
