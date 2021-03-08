import axios from 'axios'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Loading from '../../components/Loading/Loading'
import { productsState, productType } from '../../store/atoms/atoms'

const Filterbar = lazy(()=>import( './Filterbar'))
const SidebarCategory = lazy(()=>import( './SidebarCategory'))
const SidebarFilter = lazy(()=>import( './SidebarFilter'))
const SingleProduct = lazy(()=>import( '../../components/SingleProduct/SingleProduct'));



function Category() {

	const [type,setType] = useRecoilState(productType);
	const [products,setProducts] = useRecoilState(productsState)
	useEffect(() => {
		axios.post('http://localhost:3001/products',{
            "type":type
        })
		.then((res)=>{
			console.log(res);
			setProducts([...res.data])
		})
		.catch(err => {
			console.log(err)
		})
		console.log(type)
	}, [type])
    return (
    <>
        <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>Shop Category page</h1>
                        <nav className="d-flex align-items-center">
                            <Link >Home<span className="lnr lnr-arrow-right"></span></Link>
                            <Link >Shop<span className="lnr lnr-arrow-right"></span></Link>
                            <Link >Fashon Category</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
			<div className="row">
				<Suspense fallback={<Loading/>}>
					<div className="col-xl-3 col-lg-4 col-md-5">
						<SidebarCategory type={type} setType={setType}/>
					</div>
					<div className="col-xl-9 col-lg-8 col-md-7">
						<section className="lattest-product-area pb-40 category-list">
							<div className="row">
								{
									products.length < 1 ?(<div className='container' style={{
										color:'gray',
										display:'flex',
										alignItems:'center',
										justifyContent:'center',
										marginTop:'4rem'
									}}><h1>No Products found</h1></div>):(
										
										products.map((prod)=>
											<div className="col-lg-4 col-md-6">
												<SingleProduct type={prod.type} id={prod._id} description={prod.description} title={prod.title} Aprice={prod.Aprice} Dprice={prod.Dprice} img={prod.img}/>
											</div>
										)
										
									)
								}
							</div>
						</section>
					</div>
				</Suspense>
			</div>
		</div>
    </>
    )
}

export default Category
