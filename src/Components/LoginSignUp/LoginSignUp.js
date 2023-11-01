import React, { useState } from 'react';
import './LoginSignUp.css';

import user_email from '../sources/email.png'
import user_pass from '../sources/password.png'
import user_id from '../sources/person.png'

function LoginSignUp() {

    const [action, setAction] = useState("Login");
    return (
        <div className='container'>

            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputfields">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_id} alt="" />
                    <input type="text" placeholder='Enter Name' />
                </div>}

                <div className="input">
                    <img src={user_email} alt="" />
                    <input type="emial" placeholder='Enter Email' />
                </div>

                <div className="input">
                    <img src={user_pass} alt="" />
                    <input type="password" placeholder='Enter Password' />
                </div>
            </div>

            {action === "Sign Up" ? <div></div> : <div className="forgot-pass">Recover Password <span>Click Here</span></div>
            }
            <div className="buttons">
                <button className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign up</button>
                <button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
            </div>

        </div>
    )
}

export default LoginSignUp
