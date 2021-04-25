import { Modal } from '@material-ui/core'
import React from 'react'
import { useRecoilState } from 'recoil'
import { detailModalState, productState } from '../../store/atoms/atoms'
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      width: '80%',
      borderRadius:'4px',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #ffba0070',
      paddingLeft:0
    },
}));
function DetailModal() {

    const [product,] = useRecoilState(productState)

    const history = useHistory();
    const classes = useStyles();
    const [detailModal, setDetailModal] = useRecoilState(detailModalState)
    const handleClose = () => {
        setDetailModal(false);
    }
    
    const handleAddToCart = () => {
        console.log('cart')
        console.log(product)
        // console.log(JSON.parse(localStorage.getItem('user')))
        if(localStorage.getItem('user')){
            axios.post('http://localhost:3001/cart/add',{
                "userId":localStorage.getItem('userId'),
                "id":product?.id
            })
            .then((res)=>{
                console.log(res)
                localStorage.setItem('user',JSON.stringify(res.data));

                // console.log(localStorage);
                setDetailModal(false);
            })
            .catch((err)=>{
                console.log(err)
                setDetailModal(false);
            })
        }
        else{
            setDetailModal(false);

            history.push('/login')
        }

    }

    const handleOrder = () =>{
        console.log(product)
        // console.log(JSON.parse(localStorage.getItem('user')))
        if(localStorage.getItem('user')){
            setDetailModal(false);
            history.push('/checkout')
        }
        else{
            setDetailModal(false);
            history.push('/login')
        }
    }
    return (
        <Modal
        open={detailModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={`${classes.modal} animate__animated animate__bounce`}
        >
            <div className={`${classes.paper} animate__animated animate__fadeIn`}>
                <div className="container" style={{marginLeft:0, paddingLeft:0}}>
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="s_Product_carousel">
                                <div className="single-prd-item align-item-center justify-item-center">
                                    <img src={product?.img} alt={product?.img}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1" >
                            <div className="s_product_text">
                                <h3>{product?.title}</h3>
                                <h2>${product?.Aprice}</h2>
                                <ul className="list">
                                    <li><Link className="active" ><span>Category</span> : Household</Link></li>
                                    <li><Link ><span>Availibility</span> : In Stock</Link></li>
                                </ul>
                                <p>{product?.description}</p>
                                <div className="card_area d-flex align-items-center" style={{marginBottom:'1rem'}}>
                                    <button onClick = {handleAddToCart} className="gray_btn" >Add to Cart</button>
                                    <button onClick = {handleOrder}className="primary-btn" >Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default DetailModal
