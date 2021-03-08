import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useRecoilState } from 'recoil';
import SingleProduct from '../../components/SingleProduct/SingleProduct'
import {productType} from '../../store/atoms/atoms'
function SingleProductSlider({title, subtitle}) {

	const [type,setType] = useRecoilState(productType);
    const [products,setProducts] = useState([])
	useEffect(() => {
		console.log('useEffect')
		axios.post('http://localhost:3001/products',{
			"type":type
        })
		.then((res)=>{
			// console.log(res);
			setProducts([...res.data])
		})
		.catch(err => {
			console.log(err)
		})

    }, [type])
    
    return (
        <div className="single-product-slider">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>{title}</h1>
                            <p>{subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map((prod)=>
                            <div className="col-lg-3 col-md-6">
                                <SingleProduct type={prod.type} id={prod._id} description={prod.description} title={prod.title} Aprice={prod.Aprice} Dprice={prod.Dprice} img={prod.img}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleProductSlider
