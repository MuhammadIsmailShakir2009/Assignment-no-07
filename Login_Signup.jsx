import React, { useState,useEffect, useRef } from 'react'

import styles from './Login_Signup.module.css'
import onemailfocus1 from '../assets/cartoonImgs/onemailfocus1.png'
import onemailfocus2 from '../assets/cartoonImgs/onemailfocus2.png'
import onemailfocus3 from '../assets/cartoonImgs/onemailfocus3.png'
import onemailfocus4 from '../assets/cartoonImgs/onemailfocus4.png'
import onpasshide from '../assets/cartoonImgs/onpasswordhide.png'
import onpassshow from '../assets/cartoonImgs/onpasswordshow.png'
import onnotfocus from '../assets/cartoonImgs/onnotfocus.png'

const Login_Signup = (props) => {
    const [emailLength, setEmailLength] = useState(0);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const emailRef = useRef(null);
    const imgRef = useRef(null);
    const passwordRef = useRef(null);


      const onEmailChange = () => {
        if (emailRef.current) {
          setEmailLength(emailRef.current.value.length);
        }

        if (emailRef.current && emailRef.current.value.length == 2) {
                imgRef.current.src = onemailfocus1
        }
        else if (emailRef.current && emailRef.current.value.length == 5) {
                  imgRef.current.src = onemailfocus2  
        }
        else if (emailRef.current && emailRef.current.value.length == 8) {
                  imgRef.current.src = onemailfocus3 
        }
        else if (emailRef.current && emailRef.current.value.length == 15) {
                  imgRef.current.src = onemailfocus4
        }
      }

      const onPasswordChange =()=>{
          if(isPasswordVisible){
            imgRef.current.src =onpassshow
          }else{
            imgRef.current.src = onpasshide
          }
      }

      const handleInputBlur = () => {
        imgRef.current.src = onnotfocus;
      };
    
    
      const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
        const inputField = passwordRef.current;
        if (inputField) {
            if(isPasswordVisible){
                inputField.type = "password"
            }else{
                inputField.type = "text"
            }
        }
      }


  

      
  return (
      <div className='text-center d-flex justify-content-center mt-4 '>
        <div className={`${styles.box} pb-4`}>
            <span className=''>
            <h1 className='fw-bold text-primary'>{props.heading}</h1>
            </span>

            <span>
            <img ref={imgRef} src={onnotfocus} className={`${styles.img} mt-4`} alt="" />
            </span>

            <span>
                <form>
                   <div>
                   <span className='fs-3 me-2'>Email: </span>
                   <input type="email" name="email" id="email" ref={emailRef} onChange={onEmailChange} onBlur={handleInputBlur} placeholder='Enter your Email' className={`mt-4 ${styles.emailfs}  w-50 p-2`} required />
                   </div>

                    <div>
                    <span className='fs-3 me-2'>Password: </span>
                    <input  type="password" onClick={onPasswordChange} onBlur={handleInputBlur} ref={passwordRef} name="password" id="password" placeholder='Enter Password' className={`mt-4 ${styles.emailfs}  w-50 p-2`} required />
                    <i className={`fa-solid ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} p-1 fs-5`} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}></i>
                    <span className='ps-3'></span>
                    </div>

                    <div>
                     <input type="submit" value={props.submitText} className='btn btn-primary w-25 mt-5 fs-5' />
                   </div>
                </form>
            </span>

            <div className='mt-4'>
                <p>{props.accountCheck} <span className='text-primary' onClick={props.func}>{props.link}</span> </p>
            </div>    
        </div>
     </div>
  )
}

export default Login_Signup