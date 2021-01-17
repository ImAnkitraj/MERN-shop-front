import React from 'react'
import { Link } from 'react-router-dom'

function SingleExculsiveProduct({title, Aprice, Dprice, img}) {
    return (
        <div class="single-exclusive-slider">
            <img class="img-fluid" src={img} alt={img}/>
            <div class="product-details">
                <div class="price">
                    <h6>${Dprice}</h6>
                    <h6 class="l-through">${Aprice}</h6>
                </div>
                <h4>{title}</h4>
                <div class="add-bag d-flex align-items-center justify-content-center">
                    <Link class="add-btn" to='/'><span class="ti-bag"></span></Link>
                    <span class="add-text text-uppercase">Add to Bag</span>
                </div>
            </div>
        </div>
    )
}

export default SingleExculsiveProduct
