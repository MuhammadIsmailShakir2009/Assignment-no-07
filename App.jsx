import React, { useState } from 'react'
import Login_Signup from './Login/Login_Signup'

const App = () => {
  let [gotoCreateAccount,setGotoCreateAccount] = useState(false)
  
  const changeComponent = () =>{
    if(gotoCreateAccount == true){
       setGotoCreateAccount(false) 
  }else{
    setGotoCreateAccount(true)
  }
}
  return (
    <>
     {
      gotoCreateAccount == false?
      <Login_Signup func={changeComponent} heading="Login" submitText = "Login" accountCheck = "Do not have an account?" link = "Create Account"/>
      :    <Login_Signup func={changeComponent} heading="Sign up" submitText = "Register" accountCheck = "Already have an account?" link = "Login"/>
     }
    </>
  )
}

export default App