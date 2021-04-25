import axios from 'axios'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Loading from '../../components/Loading/Loading'
import { productsState, productType } from '../../store/atoms/atoms'

const SidebarCategory = lazy(()=>import( './SidebarCategory'))
const SidebarFilter = lazy(()=>import( './SidebarFilter'))
const SingleProduct = lazy(()=>import( '../../components/SingleProduct/SingleProduct'));



function Category() {

	const [productsCount, setProductsCount] = useState(0);
	const [type,setType] = useRecoilState(productType);
	const [products,setProducts] = useRecoilState(productsState)
	const [limit, setLimit]= useState(12);
	const [page, setPage] = useState(0);
	const prevPage = () => {
        if(page === 0)
            return;
        setPage(page-1);
    }

    const nextPage = () => {
        if(10*(page+1)> productsCount)
          return;
        setPage(page+1);
    }
	useEffect(() => {
		axios.get('http://localhost:3001/products/count?type='+type)
		.then((res)=>{
			console.log(res.data);
			setProductsCount(res.data)
		})
		.catch(err => {
			console.log(err)
		})

		axios.post('http://localhost:3001/products',{
            "type":type,
			"offset":limit*page,
			"limit":limit,
        })
		.then((res)=>{
			console.log(res);
			setProducts([...res.data])
		})
		.catch(err => {
			console.log(err)
		})
		console.log(type)
	}, [type, limit, page])
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
						<div className="filter-bar d-flex flex-wrap align-items-center">
            				<div className="pagination">
								{
                                    page > 0 ? <Link onClick={prevPage} className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>:null
                                }
                                {
                                    (page-3 > 0) ? <Link onClick={()=>setPage(page-4)} >{page-3}</Link>:null
                                }
                                {
                                    (page-2 > 0) ? <Link onClick={()=>setPage(page-3)} >{page-2}</Link>:null
                                }
                                {
                                    (page-1 > 0) ? <Link onClick={()=>setPage(page-2)} >{page-1}</Link>:null
                                }
                                {
                                    (page > 0) ? <Link onClick={()=>setPage(page-1)} >{page}</Link>:null
                                }
                                <Link className="active">{page+1}</Link>
                                {
                                    (page+1)*limit < productsCount ? <Link onClick={()=>setPage(page+1)} >{page+2}</Link>:null
                                }
                                {
                                    (page+2)*limit < productsCount ? <Link onClick={()=>setPage(page+2)} >{page+3}</Link>:null
                                }
                                {
                                    (page+3)*limit < productsCount ? <Link onClick={()=>setPage(page+3)} >{page+4}</Link>:null
                                }
                                {
                                    (page+4)*limit < productsCount ? <Link onClick={()=>setPage(page+4)} >{page+5}</Link>:null
                                }
                                {
                                    (page+5)*limit < productsCount ? <Link onClick={()=>setPage(page+5)} >{page+6}</Link>:null
                                }
                                {
                                    (page+1)*limit < productsCount ?<Link onClick={()=>nextPage(page)} className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>:null
                                }
							</div>
        				</div>
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
