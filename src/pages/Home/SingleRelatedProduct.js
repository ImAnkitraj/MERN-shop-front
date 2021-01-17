import React from 'react'
import { Link } from 'react-router-dom'

function SingleRelatedProduct({img, title, Aprice, Dprice}) {
    return (
        <div class="single-related-product d-flex">
            <Link to='/'><img src={img} alt={img}/></Link>
            <div class="desc">
                <Link to='/' class="title">{title}</Link>
                <div class="price">
                    <h6>${Dprice}</h6>
                    <h6 class="l-through">${Aprice}</h6>
                </div>
            </div>
        </div>
    )
}

export default SingleRelatedProduct
