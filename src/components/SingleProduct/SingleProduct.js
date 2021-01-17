import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { detailModalState, productState } from '../../store/atoms/atoms'

function SingleProduct({title, description, Aprice, Dprice, img, id ,type}) {

    const history = useHistory();

    const [detailModal, setDetailModal] = useRecoilState(detailModalState);
    const [product, setProduct] = useRecoilState(productState);

    const handleProductDetail = () => {
        setProduct({
            type:type,
            title:title,
            img:img,
            id:id,
            description: description,
            Aprice: Aprice,
            Dprice: Dprice,
        })
        setDetailModal(true);
    }

    const addToCart = () => {
        if(localStorage.getItem('user')){
            axios.post('http://localhost:3001/cart/add',{
                "userId":localStorage.getItem('userId'),
                "id":id
            })
            .then((res)=>{
                alert('added')
                console.log('added',res)
                localStorage.setItem('user',JSON.stringify(res.data));
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        else{
            history.push('/login')
        }

    }
    
    return (
        <>
        <div className="single-product">
            <img onClick = {handleProductDetail} className="img-fluid" src={img} alt={img}/>
            <div className="product-details">
                <h6>{title}</h6>
                <div className="price">
                    <h6>${Dprice}</h6>
                    <h6 className="l-through">${Aprice}</h6>
                </div>
                <div className="prd-bottom">

                    <Link onClick={addToCart} className="social-info">
                        <span className="ti-bag"></span>
                        <p className="hover-text">add to bag</p>
                    </Link>
                    {/* <Link className="social-info">
                        <span className="lnr lnr-heart"></span>
                        <p className="hover-text">Wishlist</p>
                    </Link>
                    <Link className="social-info">
                        <span className="lnr lnr-sync"></span>
                        <p className="hover-text">compare</p>
                    </Link> */}
                    <Link className="social-info">
                        <span onClick={handleProductDetail}className="lnr lnr-move"></span>
                        <p className="hover-text">view more</p>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default SingleProduct
