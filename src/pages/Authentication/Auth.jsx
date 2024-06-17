import React from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png"

const Auth = () => {
  return (
    <div className="auth">
        <div className="auth-left">
            <img src={Logo} alt="logo" />
            <div className="webName">
                <h1>PeterConnect</h1>
                <h6>Connecting People, One Friend at a Time</h6>
            </div>
        </div>
        <SignIn/>
        {/* <SignUp/> */}
    </div>
  )
}

const SignIn = ()=>{
    return(
        <div className="auth-right ">
            <form className="infoForm authForm">
                
                <h3>Sign In</h3>
                <div>
                    <input type="text" className='infoInput' placeholder='Username' name='username' />
                </div>

                <div>
                    <input type="password" className='infoInput' placeholder='Password' name='password' />
                </div>
                
                <div>
                    <span style={{fontSize:"12px"}}>Don't have an Account? Sign Up!</span>
                    <button className="button signUp-button" type='submit'>
                    Sign In
                </button>
                </div>
                
            </form>
        </div>
    )
}


const SignUp = ()=>{
    return(
        <div className="auth-right ">
            <form className="infoForm authForm">
                
                <h3>Sign Up</h3>
                <div>
                <input type="text" className='infoInput' placeholder='First Name' name='firstname' />
                <input type="text" className='infoInput' placeholder='Last Name' name='lastname' />
                </div>
                <div>
                    <input type="text" className='infoInput' placeholder='Username' name='username' />
                </div>
                <div>
                    <input type="password" className='infoInput' placeholder='Password' name='password' />
                    <input type="password" className='infoInput' placeholder='Confirm Password' name='confirmpassword' />
                </div>
                
                <div>
                    <span style={{fontSize:"12px"}}>Already have an Account? Sign In!</span>
                </div>
                <button className="button signUp-button" type='submit'>
                    Sign Up
                </button>
            </form>
        </div>
    )
}

// function signUp(){
//     return(
//         <div className="auth-right">
//             <form className="infoForm">


//             <h3>Sign Up</h3>
//             <div>
//                 <input type="text" placeholder='First Name' name='firstname' className='infoInput' />
//             </div>
//             </form>
//         </div>
//     )
// }

export default Auth