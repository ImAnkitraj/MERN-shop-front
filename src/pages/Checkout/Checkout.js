import axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { productState } from '../../store/atoms/atoms'

function Checkout() {

    const history  =  useHistory()
    const [product,] = useRecoilState(productState)

    const handleOrder = () => {
        axios.post('http://localhost:3001/order/add',{
            "userId":localStorage.getItem('userId'),
            "id":product?.id
        })
        .then((res)=>{
            console.log(res)
            localStorage.setItem('user',JSON.stringify(res.data));
            history.push('/confirmation')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return (
    <>
        <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>Checkout</h1>
                        <nav className="d-flex align-items-center">
                            <Link to='/home'>Home<span className="lnr lnr-arrow-right"></span></Link>
                            <Link to='/shop'>Checkout</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <section className="checkout_area section_gap">
            <div className="container">
                <div className="returning_customer">
                    <div className="check_title">
                        <h2>Returning Customer? <Link >Click here to login</Link></h2>
                    </div>
                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new
                        customer, please proceed to the Billing & Shipping section.</p>
                    <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                        <div className="col-md-6 form-group p_star">
                            <input type="text" className="form-control" id="name" name="name"/>
                            <span className="placeholder" data-placeholder="Username or Email"></span>
                        </div>
                        <div className="col-md-6 form-group p_star">
                            <input type="password" className="form-control" id="password" name="password"/>
                            <span className="placeholder" data-placeholder="Password"></span>
                        </div>
                        <div className="col-md-12 form-group">
                            <button type="submit" value="submit" className="primary-btn">login</button>
                            <div className="creat_account">
                                <input type="checkbox" id="f-option" name="selector"/>
                                <label for="f-option">Remember me</label>
                            </div>
                            <Link className="lost_pass" >Lost your password?</Link>
                        </div>
                    </form>
                </div>
                <div className="cupon_area">
                    <div className="check_title">
                        <h2>Have a coupon? <Link >Click here to enter your code</Link></h2>
                    </div>
                    <input type="text" placeholder="Enter coupon code"/>
                    <Link className="tp_btn" >Apply Coupon</Link>
                </div>
                <div className="billing_details">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>Billing Details</h3>
                            <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="first" name="name"/>
                                    <span className="placeholder" data-placeholder="First name"></span>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="last" name="name"/>
                                    <span className="placeholder" data-placeholder="Last name"></span>
                                </div>
                                
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="number" name="number"/>
                                    <span className="placeholder" data-placeholder="Phone number"></span>
                                </div>
                                <div className="col-md-6 form-group p_star">
                                    <input type="text" className="form-control" id="email" name="compemailany"/>
                                    <span className="placeholder" data-placeholder="Email Address"></span>
                                </div>
                                
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="add1" name="add1"/>
                                    <span className="placeholder" data-placeholder="Address line 01"></span>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="add2" name="add2"/>
                                    <span className="placeholder" data-placeholder="Address line 02"></span>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="city" name="city"/>
                                    <span className="placeholder" data-placeholder="Town/City"></span>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <select className="country_select selectBox">
                                        <option className="from-control" value="1">District</option>
                                        <option className="from-control" value="2">District</option>
                                        <option className="from-control" value="4">District</option>
                                    </select>
                                </div>
                                <div className="col-md-12 form-group">
                                    <input type="text" className="form-control" id="zip" name="zip" placeholder="Postcode/ZIP"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector"/>
                                        <label for="f-option2">Create an account?</label>
                                    </div>
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="creat_account">
                                        <h3>Shipping Details</h3>
                                        <input type="checkbox" id="f-option3" name="selector"/>
                                        <label for="f-option3">Ship to a different address?</label>
                                    </div>
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="order_box">
                                <h2>Your Order</h2>
                                <ul className="list">
                                    <li><Link >Product <span>Total</span></Link></li>
                                    <li><Link >Fresh Blackberry <span className="middle">x 02</span> <span className="last">$720.00</span></Link></li>
                                    <li><Link >Fresh Tomatoes <span className="middle">x 02</span> <span className="last">$720.00</span></Link></li>
                                    <li><Link >Fresh Brocoli <span className="middle">x 02</span> <span className="last">$720.00</span></Link></li>
                                </ul>
                                <ul className="list list_2">
                                    <li><Link >Subtotal <span>$2160.00</span></Link></li>
                                    <li><Link >Shipping <span>Flat rate: $50.00</span></Link></li>
                                    <li><Link >Total <span>$2210.00</span></Link></li>
                                    <li><Link >Payment Type <span>Cash On Delivery</span></Link></li>
                                </ul>
                                <br/>
                                <Link onClick={handleOrder}className="primary-btn" >Proceed Order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Checkout
