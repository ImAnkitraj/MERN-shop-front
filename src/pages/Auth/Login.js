import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState } from '../../store/atoms/user';
import axios from 'axios'


function Login() {

    const history = useHistory();
    const [user, setUser] = useRecoilState(userState);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [auth, setAuth] = useState(true);

    const handleAuth = () => {
        setAuth(!auth);
    }

    const login = (e) => {
        e.preventDefault();
        console.log('login')
        axios.post('http://localhost:3001/login',{
            "email":email,
            "password":password
        })
        .then(res=>{
            console.log(res);
            if(res.data.status === false){

            }
            else{
                localStorage.setItem('userId',res.data.userId)
                localStorage.setItem('user',(JSON.stringify(res.data.user)));
                localStorage.setItem('token',(res.data.token));
                localStorage.setItem('tokenExpiration',(res.data.tokenExpiration));
                console.log(localStorage)
                setUser(res.data)
                history.push('/')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    const signup = (e) => {
        e.preventDefault();
        e.preventDefault();
        console.log('login')
        axios.post('http://localhost:3001/register',{
            "email":email,
            "password":password
        })
        .then(res=>{
            console.log(res);
            if(res.data.status === false){

            }
            else{
                localStorage.setItem('userId',res.data.userId)
                localStorage.setItem('user',(JSON.stringify(res.data.user)));
                localStorage.setItem('token',(res.data.token));
                localStorage.setItem('tokenExpiration',(res.data.tokenExpiration));
                console.log(localStorage)
                setUser(res.data)
                history.push('/')
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
    <>
        <section className="banner-area organic-breadcrumb">
            <div className="container">
                <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div className="col-first">
                        <h1>Login/Register</h1>
                        <nav className="d-flex align-items-center">
                            <Link to="/home">Home<span className="lnr lnr-arrow-right"></span></Link>
                            <Link>Login/Register</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login_box_img">
                            <img className="img-fluid" src="img/login.jpg" alt=""/>
                            <div className="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <button className="primary-btn" onClick={handleAuth}>
                                    {
                                        auth? "Create an Account":"Login to your Account"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            {
                                auth ? (
                                    <h3>Log in to enter</h3>
                                ):(
                                    <h3>Sign up to shop</h3>   
                                )
                            }
                            <form className="row login_form"  id="contactForm" novalidate="novalidate">
                                <div className="col-md-12 form-group">
                                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="name" name="name" placeholder="Username" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'"/>
                                </div>
                                <div className="col-md-12 form-group">
                                    <input value={password} onChange={(e)=>setPassword(e.target.value)}type="text" className="form-control" id="name" name="name" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'"/>
                                </div>
                                {/* <div className="col-md-12 form-group">
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector"/>
                                        <label for="f-option2">Keep me logged in</label>
                                    </div>
                                </div> */}
                                <div className="col-md-12 form-group">
                                    {
                                        auth ? (
                                            <button onClick={login} className="primary-btn">Log In</button>
                                        ):(
                                            <button onClick={signup} className="primary-btn">Sign up</button>
                                        )
                                    }
                                    {/* <a href="#">Forgot Password?</a> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Login
