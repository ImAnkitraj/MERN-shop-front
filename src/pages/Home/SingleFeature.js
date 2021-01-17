import React from 'react'

function SingleFeature({title, subTitle, img}) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
                <div className="f-icon">
                    <img src={img} alt={img}/>
                </div>
                <h6>{title}</h6>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default SingleFeature
