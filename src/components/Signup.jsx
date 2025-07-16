import React, { useState } from 'react'
import { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

const title = "Register"
const socialTitle = "Login With Social Media"
const btnText = "Signup"

const Signup = () => {

    const [errorMessage, seterrorMessage] = useState("")
    const { signUpWithGmail, createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message
            seterrorMessage("Please Provide Valid Email & Password!")
        })
    }

    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value
        if (password !== confirmPassword) {
            seterrorMessage("Password dosen't match!")
        } else {
            seterrorMessage("")
            createUser(email, password).then((userCredential) => {
                const user = userCredential.user
                alert("Account Created Successfully Done!")
                navigate(from, {replace: true})
            }).catch((error) => {
                console.log(error.message);
                alert(`${error.message}`)
            })
        }
    }

    return (
        <div className='login-section section-bg padding-tb'>
            <div className="container">
                <div className="account-wrapper">
                    <h3 className='title'>{title}</h3>
                    <form className='account-form' onSubmit={handleSignup}>
                        <div className="form-group"><input type="name" name='name' id='name' placeholder='Full Name *' required /></div>
                        <div className="form-group"><input type="email" name='email' id='email' placeholder='Email Address *' required /></div>
                        <div className="form-group"><input type="password" name='password' id='password' placeholder='Password *' required /></div>
                        <div className="form-group"><input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required /></div>
                        <div>
                            {
                                errorMessage && (
                                    <div className="error-message text-danger mb-1">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>
                        <div className="form-group">
                            <button type='submit' className='d-block lab-btn'><span>{btnText}</span></button>
                        </div>
                    </form>
                    <div className="account-bottom">
                        <span className='d-block cate pt-10'>Have an Account ? <Link to="/login">Login</Link></span>
                        <span className='or'><span>or</span></span>
                        <h5 className='subTitle'>{socialTitle}</h5>
                        <ul className='lab-ul social-icons justify-content-center'>
                            <li><a className='facebook' onClick={handleRegister}><i className='icofont-facebook'></i></a></li>
                            <li><a className='twitter' onClick={handleRegister}><i className='icofont-twitter'></i></a></li>
                            <li><a className='linkedin' onClick={handleRegister}><i className='icofont-linkedin'></i></a></li>
                            <li><a className='instagram' onClick={handleRegister}><i className='icofont-instagram'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup