import React from 'react'
import { Link } from 'react-router-dom'

function Filterbar() {
    return (
        <div className="filter-bar d-flex flex-wrap align-items-center">
            <div className="sorting">
                <select>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                    <option value="1">Default sorting</option>
                </select>
            </div>
            <div className="sorting mr-auto">
                <select>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                    <option value="1">Show 12</option>
                </select>
            </div>
            <div className="pagination">
                <Link className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                <Link className="active">1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                <Link>6</Link>
                <Link className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

export default Filterbar
