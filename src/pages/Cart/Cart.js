import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading';


const CartProduct  = lazy(()=>import('./CartProduct'));

function Cart() {

    const [deliveryType , setDeliveryType] = useState(0);
    const [cartProduct, setCartProduct] = useState([])
    const [subTotal, setSubTotal] = useState(0)

    const handleClick = (type) => {
        setDeliveryType(type);
    }
    const local = JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
        // console.log('cart', local)
        var st = 0;
        local.cart.map(_=>{
            st+=_.Dprice;
            return _
        })
        setSubTotal(st)
        setCartProduct([...local.cart])
    },[local])
    return (
    <>
        <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>Shopping Cart</h1>
                        <nav className="d-flex align-items-center">
                            <Link to="/home">Home<span className="lnr lnr-arrow-right"></span></Link>
                            <Link to="/cart">Cart</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <section className="cart_area">
            <div className="container">
                <div className="cart_inner">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col">Price</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { cartProduct.length > 0 ? (
                                    <Suspense fallback={<Loading/>}>
                                        {
                                            cartProduct?.map((product)=>{
                                                return <CartProduct img={product.img} price={product.Dprice} description={product.description} id={product._id}/>
                                            })
                                        }
                                    </Suspense>):(
                                        <tr>Added some products to cart</tr>
                                    )
                                }
                                
                                
                                <tr className="bottom_button">
                                    <td>
                                        
                                    </td>
                                    <td>

                                    </td>
                                    <td></td>
                                    <td>

                                    </td>
                                    <td>
                                        <div className="cupon_text d-flex" style={{float:'right'}}>
                                            <input type="text" placeholder="Coupon Code"/>
                                            <button className="primary-btn">Apply</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td></td>
                                    <td>

                                    </td>
                                    <td>
                                        <h5>Subtotal</h5>
                                    </td>
                                    <td>
                                        <h5>${subTotal}</h5>
                                    </td>
                                </tr>
                                <tr className="shipping_area">
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td></td>
                                    <td>
                                    </td>
                                    <td>
                                        <div className="shipping_box">
                                            <ul className="list">
                                                <li onClick={()=>handleClick(0)} className={deliveryType === 0 ? 'active':''}><Link to='/cart'>Flat Rate: $5.00</Link></li>
                                                <li onClick={()=>handleClick(1)} className={deliveryType === 1 ? 'active':''}><Link to='/cart'>Free Shipping</Link></li>
                                                <li onClick={()=>handleClick(2)} className={deliveryType === 2 ? 'active':''}><Link to='/cart'>Flat Rate: $10.00</Link></li>
                                                <li onClick={()=>handleClick(3)} className={deliveryType === 3 ? 'active':''}><Link to='/cart'>Local Delivery: $2.00</Link></li>
                                            </ul>
                                            <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true"></i></h6>
                                            
                                            <select className="shipping_select">
                                                <option value="1">Select a State</option>
                                                <option value="2">Select a State</option>
                                                <option value="4">Select a State</option>
                                            </select>
                                            <input type="text" placeholder="Postcode/Zipcode"/>
                                            <Link className="gray_btn">Update Details</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="out_button_area">
                                    <td>

                                    </td>
                                    <td></td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                    <td>
                                        <div className="checkout_btn_inner d-flex align-items-center">
                                            <Link className="gray_btn">Continue Shopping</Link>
                                            <Link to='/checkout' className="primary-btn">Proceed to checkout</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Cart
