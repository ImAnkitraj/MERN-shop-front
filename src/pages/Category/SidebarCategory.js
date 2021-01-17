import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../../data'

function SidebarCategory({type,setType}) {
    
    return (
        <div className="sidebar-categories">
            <div className="head">Browse Categories</div>
            <ul className="main-categories">
                {
                    categories.map(_=>{
                        return <SingleCategory title={_?.title} types={_?.types} type={type} setType={setType}/>
                    })
                }
            </ul>
        </div>
    )
}

export default SidebarCategory


const SingleCategory = ({title,types,type,setType}) => {

    const [visible, setVisible] = useState(false);
    const handleToggle = () =>{
        setVisible(!visible);
    }

    const handleFilterType = (type) => {
        setType(type.title)
    } 
    return (
        <li class="main-nav-list"><Link class="border-bottom-0"  to='/shop' onClick={handleToggle}><span class="lnr lnr-arrow-right"></span>{title}<span class="number">(48)</span></Link>
            { visible && (
                <ul>
                    {
                        types.map(type => {
                        return <li onClick = {()=>handleFilterType(type)} class="main-nav-list child"><Link >{type.title}<span class="number">(13)</span></Link></li>
                    
                        })
                    }
                </ul>
            )}
        </li>
    )
}