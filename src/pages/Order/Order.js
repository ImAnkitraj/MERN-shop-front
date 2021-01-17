import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading';


const OrderProduct  = lazy(()=>import('./OrderProduct'));

function Order() {

    const [orderProduct, setOrderProduct] = useState([])
    const [subTotal, setSubTotal] = useState(0)

    const local = JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
        // console.log('cart', local)
        var st = 0;
        local.order.map(_=>{
            st+=_.Dprice;
        })
        setSubTotal(st)
        setOrderProduct([...local.order])
    },[local])
    return (
    <>
        <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>My Orders</h1>
                        <nav className="d-flex align-items-center">
                            <Link to="/home">Home<span className="lnr lnr-arrow-right"></span></Link>
                            <Link to="/order">Order</Link>
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
                                { orderProduct.length > 0 ? (
                                    <Suspense fallback={<Loading/>}>
                                        {
                                            orderProduct?.map((product)=>{
                                                return <OrderProduct img={product.img} price={product.Dprice} description={product.description} id={product._id}/>
                                            })
                                        }
                                    </Suspense>):(
                                        <tr>Added some products to cart</tr>
                                    )
                                }
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Order;
