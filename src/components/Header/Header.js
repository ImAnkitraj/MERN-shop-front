import axios from 'axios';
import React, { useState } from 'react'
import { Link, NavLink, useHistory} from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { detailModalState, errorModalState, productsState } from '../../store/atoms/atoms';
import { userState } from '../../store/atoms/user';
import DetailModal from '../DetailModal/DetailModal';
import ErrorModal from '../ErrorModal/ErrorModal';

function Header() {

    const history = useHistory();
    const [,setProducts] = useRecoilState(productsState)
    const [searchBox, setSearchBox] = useState(false);
    const [searchText, setSearchText] = useState();
    const [user, setUser] = useRecoilState(userState);
    const [detailModal, ] = useRecoilState(detailModalState)
    const [errorModal, ] = useRecoilState(errorModalState)
    const logout = () =>{
        setUser(undefined);
        localStorage.clear();
    }

    const search = (e) => {
        console.log(searchText)
        e.preventDefault();
        axios.post('http://localhost:3001/search',{
                "searchItem":searchText,
        })
        .then((res)=>{
            console.log(res.data)
            setProducts([...res.data])
            setSearchBox(false);
        })
        .catch((err)=>{
            console.log(err)
            setSearchBox(false);
        })
        history.push('/shop')
    }
    return (
    <>
    <header className="header_area sticky-header">
        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light main_box">
                <div className="container">
                    <Link to='/'className="navbar-brand logo_h" ><img src="img/logo.png" alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item"><NavLink to='/home' className="nav-link">Home</NavLink></li>
                            <li className="nav-item"><NavLink to='/shop' className="nav-link">Shop</NavLink></li>
                            {/* <li className="nav-item"><NavLink to='/contact' className="nav-link" >Contact</NavLink></li> */}
                            {
                                localStorage.getItem('user') ? (
                                    <>
                                        <li className="nav-item"><NavLink to='/order' className="nav-link" >My Orders</NavLink></li>
                                        <li className="nav-item"><Link to='/' className="nav-link" onClick={logout} >Logout</Link></li>
                                    </>
                                ):(
                                    <li className="nav-item"><NavLink to='/login' className="nav-link" >Login</NavLink></li>
                               ) 
                            }
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item"><NavLink to='/cart' className="cart"><span className="ti-bag"></span></NavLink></li>
                            <li className="nav-item">
                                <button onClick={()=>setSearchBox(true)}className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        {
            searchBox && (
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form onSubmit={search} className="d-flex justify-content-between">
                            <input onChange={(e)=>setSearchText(e.target.value)} value={searchText} type="text" className="form-control" id="search_input" placeholder="Search Here"/>
                            <button type="submit" className="btn"></button>
                            <span onClick={()=>setSearchBox(false)} className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                        </form>
                    </div>
                </div>
            )
        }
    {detailModal && <DetailModal/>}
    {errorModal && <ErrorModal/>}
    </header>
    </>
    )
}

export default Header
