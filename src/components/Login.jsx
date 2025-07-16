import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const title = "Login"
const socialTitle = "Login With Social Media"
const btnText = "Login Now"
const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const Login = () => {
    const [errorMessage, seterrorMessage] = useState("")
    const { signUpWithGmail, login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        login(email, password).then((result) => {
            const user = result.user
            alert("Login Successfully Done!")
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message
            seterrorMessage("Please Provide Valid Email & Password!")
        })
    }
    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsg = error.message
            seterrorMessage("Please Provide Valid Email & Password!")
        })
    }
    return (
        <div>
            <div className='login-section section-bg padding-tb'>
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className="form-group"><input type="email" name='email' id='email' placeholder='Email Address *' required /></div>
                            <div className="form-group"><input type="password" name='password' id='password' placeholder='Password *' required /></div>
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
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                        <input type="checkbox" name='remember' id='remember' />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forget Password</Link>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type='submit' className='d-block lab-btn'><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className='d-block cate pt-10'>Don't have an Account ? <Link to="/sign-up">Sign Up</Link></span>
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
        </div>
    )
}

export default Login