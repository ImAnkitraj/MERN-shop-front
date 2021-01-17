import axios from 'axios'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'

const Filterbar = lazy(()=>import( './Filterbar'))
const SidebarCategory = lazy(()=>import( './SidebarCategory'))
const SidebarFilter = lazy(()=>import( './SidebarFilter'))
const SingleProduct = lazy(()=>import( '../../components/SingleProduct/SingleProduct'));



function Category() {

	const [type,setType] = useState();
	const [products,setProducts] = useState([])
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
					{/* <SidebarFilter/> */}
				</div>
				<div className="col-xl-9 col-lg-8 col-md-7">
					{/* <Filterbar/> */}
					<section className="lattest-product-area pb-40 category-list">
						<div className="row">
							{
								products.length < 1 ?(<>No Product</>):(
									
									products.map((prod)=>
										<div className="col-lg-4 col-md-6">
											<SingleProduct type={prod.type} id={prod._id} description={prod.description} title={prod.title} Aprice={prod.Aprice} Dprice={prod.Dprice} img={prod.img}/>
										</div>
									)
									
								)
							}
							
						</div>
					</section>
					{/* <!-- End Best Seller --> */}
					{/* <!-- Start Filter Bar --> */}
					<div className="filter-bar d-flex flex-wrap align-items-center">
						<div className="sorting mr-auto">
							<select>
								<option value="1">Show 12</option>
								<option value="1">Show 12</option>
								<option value="1">Show 12</option>
							</select>
						</div>
						<div className="pagination">
							<Link to ='/shop' className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
							<Link to ='/shop' className="active">1</Link>
							<Link to ='/shop'>2</Link>
							<Link to ='/shop'>3</Link>
							<Link to ='/shop' className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
							<Link to ='/shop'>6</Link>
							<Link to ='/shop' className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
						</div>
					</div>
				</div>
			</Suspense>
		</div>
	</div>
    </>
    )
}

export default Category
