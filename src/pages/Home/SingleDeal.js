import React from 'react'
import { Link } from 'react-router-dom'

function SingleDeal({img, title}) {
    return (
        <div className="single-deal">
            <div className="overlay"></div>
            <img className="img-fluid w-100" src={img} alt={img}/>
            <Link to={img} className="img-pop-up" target="_blank">
                <div className="deal-details">
                    <h6 className="deal-title">{title}</h6>
                </div>
            </Link>
        </div>
    )
}

export default SingleDeal
