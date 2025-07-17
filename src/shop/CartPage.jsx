import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import dellImgUrl from "../assets/images/shop/del.png"
import CheckoutPage from './CheckoutPage'

const CartPage = () => {

    const [cartItems, setcartItems] = useState([])

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []
        setcartItems(storedCartItems)
    }, [])

    const calculateTotalPrice = (item) => {
        return item.price * item.quantity
    }

    const handleIncrease = (item) => {
        item.quantity += 1
        setcartItems([...cartItems])
        localStorage.setItem("cart", JSON.stringify(cartItems))
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setcartItems([...cartItems])
            localStorage.setItem("cart", JSON.stringify(cartItems))
        }
    }

    const handleRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
        setcartItems(updateCart)
        updateLocalStorage(updateCart)
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0)

    const orderTotal = cartSubtotal


    return (
        <div>
            <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cart-product'>Product</th>
                                        <th className='cart-price'>Price</th>
                                        <th className='cart-quantity'>Quantity</th>
                                        <th className='cart-total'>Total</th>
                                        <th className='cart-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop">{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>$ {item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>$ {calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}>
                                                        <img src={dellImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input type="text" className='cart-page-input-text' name='coupon' id='coupon' placeholder='Coupon Code...' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        <CheckoutPage />
                                    </div>
                                </form>
                            </div>
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>$ {cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping & Handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Subtotal</span>
                                                    <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage