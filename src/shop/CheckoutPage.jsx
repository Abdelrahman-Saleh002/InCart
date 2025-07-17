import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom'

const CheckoutPage = () => {

    const [show, setShow] = useState(false)
    const [activeTap, setActiveTap] = useState("visa")

    const handleTapChange = (tabId) => {
        setActiveTap(tabId)
    }

    const handleShow = () => setShow(true)
    const handleclose = () => setShow(false)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully")
        localStorage.removeItem("cart")
        navigate(from, { replace: true })
    }

    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow} >Prossed to Checkout</Button>
            <Modal show={show} onHide={handleclose} animation={false} className='modal fade' centered >
                <div className="modal-dialog">
                    <h5 className='px-3 mb-3'>Select your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a
                                            href="#visa"
                                            className={`nav-link ${activeTap === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTap === "visa"}
                                            onClick={() => handleTapChange("visa")}
                                        >
                                            <img src="https://i.imgur.com/sB4jftM.png" width={80} alt="" />
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a
                                            href="#paypal"
                                            className={`nav-link ${activeTap === "paypal" ? "active" : ""}`}
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTap === "paypal"}
                                            onClick={() => handleTapChange("paypal")}
                                        >
                                            <img src="https://i.imgur.com/yK7EDD1.png" width={80} alt="" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id='myTabContent'>
                                    <div
                                        className={`tab-pane fade ${activeTap === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'>
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Cridet Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min={1} max={999} className='form-control' required />
                                                    <span>Card Number</span><i className='fa fa-eye'></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' min={1} max={999} className='form-control' required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' min={1} max={999} className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`tab-pane fade ${activeTap === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'>
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="inputbox">
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span>Enter Your Email</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input type="text" name='number' id='number' min={1} max={999} className='form-control' required />
                                                    <span>Your Name</span>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' min={1} max={999} className='form-control' required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input type="text" name='number' id='number' min={1} max={999} className='form-control' required />
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-primary btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer: </em>In no event shall payment or partial payment by Owner for any material or service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CheckoutPage