import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom';

const Loading = lazy(()=>import('../../components/Loading/Loading'));
const SingleExculsiveProduct = lazy(()=>import('./SingleExculsiveProduct'));
const SingleRelatedProduct = lazy(()=>import('./SingleRelatedProduct'));
const SingleProductSlider = lazy(()=>import('./SingleProductSlider'));
const SingleDeal = lazy(()=>import('./SingleDeal'));
const SingleFeature = lazy(()=>import('./SingleFeature'));

function Home() {
    return (
    <>
        <Suspense fallback={<Loading/>}>
            <div className="banner-area">
                <div className="banner-content">
                    <p><img src='./img/banner/banner-img.png' alt="pic"/></p>
                </div>
            </div>
            <section className="features-area section_gap">
                <div className="container">
                    <div className="row features-inner">
                        <SingleFeature img="img/features/f-icon1.png" title='Free Delivery' subTitle='Free Shipping on all order'/>
                        <SingleFeature img="img/features/f-icon2.png" title='Return Policy' subTitle='Free Shipping on all order'/>
                        <SingleFeature img="img/features/f-icon3.png" title='24/7 Support' subTitle='Free Shipping on all order'/>
                        <SingleFeature img="img/features/f-icon4.png" title='Secure Payment' subTitle='Free Shipping on all order'/>
                    </div>
                </div>
            </section>
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <SingleDeal img="img/category/c1.jpg" title="Sneakers for Sports"/>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <SingleDeal img="img/category/c2.jpg" title="Sneakers for Sports"/>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <SingleDeal img="img/category/c3.jpg" title="Sneakers for Sports"/>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <SingleDeal img="img/category/c4.jpg" title="Sneakers for Sports"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <SingleDeal img="img/category/c5.jpg" title="Sneakers for Sports"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="active-product-area section_gap">
                <SingleProductSlider title="Latest Products" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                <SingleProductSlider title="Coming Products" subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </section>
            <section className="exclusive-deal-area">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 no-padding exclusive-left">
                            <div className="row clock_sec clockdiv" id="clockdiv">
                                <div className="col-lg-12">
                                    <h1>Exclusive Hot Deal Ends Soon!</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row clock-wrap">
                                        <div className="col clockinner1 clockinner">
                                            <h1 className="days">150</h1>
                                            <span className="smalltext">Days</span>
                                        </div>
                                        <div className="col clockinner clockinner1">
                                            <h1 className="hours">23</h1>
                                            <span className="smalltext">Hours</span>
                                        </div>
                                        <div className="col clockinner clockinner1">
                                            <h1 className="minutes">47</h1>
                                            <span className="smalltext">Mins</span>
                                        </div>
                                        <div className="col clockinner clockinner1">
                                            <h1 className="seconds">59</h1>
                                            <span className="smalltext">Secs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to= '/' className="primary-btn">Shop Now</Link>
                        </div>
                        <div className="col-lg-6 no-padding exclusive-right">
                            <div className="active-exclusive-product-slider">
                                <SingleExculsiveProduct title="addidas New Hammer sole for Sports person" Aprice={220.00} Dprice={120.00} img="img/product/e-p1.png"/>
                                <SingleExculsiveProduct title="addidas New Hammer sole for Sports person" Aprice={220.00} Dprice={120.00} img="img/product/e-p1.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="brand-area section_gap">
                <div class="container">
                    <div class="row">
                        <Link class="col single-img" to='/'>
                            <img class="img-fluid d-block mx-auto" src="img/brand/1.png" alt=""/>
                        </Link>
                        <Link class="col single-img" to='/'>
                            <img class="img-fluid d-block mx-auto" src="img/brand/2.png" alt=""/>
                        </Link>
                        <Link class="col single-img" to='/'>
                            <img class="img-fluid d-block mx-auto" src="img/brand/3.png" alt=""/>
                        </Link>
                        <Link class="col single-img" to='/'>
                            <img class="img-fluid d-block mx-auto" src="img/brand/4.png" alt=""/>
                        </Link>
                        <Link class="col single-img" to='/'>
                            <img class="img-fluid d-block mx-auto" src="img/brand/5.png" alt=""/>
                        </Link>
                    </div>
                </div>
            </section>
            <section class="related-product-area section_gap_bottom">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>Deals of the Week</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <SingleRelatedProduct img="img/r1.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <SingleRelatedProduct img="img/r2.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <SingleRelatedProduct img="img/r3.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <SingleRelatedProduct img="img/r4.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <SingleRelatedProduct img="img/r5.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <SingleRelatedProduct img="img/r6.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <SingleRelatedProduct img="img/r7.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <SingleRelatedProduct img="img/r8.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6">
                                    <SingleRelatedProduct img="img/r9.jpg" Aprice={220.00} Dprice={150.00} title="Black lace Heels"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="ctg-right">
                                <Link to='/' target="_blank">
                                    <img class="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt=""/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Suspense>
    </>
    )
}

export default Home
