import { Modal } from '@material-ui/core'
import React from 'react'
import { useRecoilState } from 'recoil'
import { makeStyles } from '@material-ui/core/styles';
import { errorModalState, errorState } from '../../store/atoms/atoms';

const useStyles = makeStyles((theme) => ({
    modal: {
      marginTop:'1rem',
      display: 'flex',
      justifyContent: 'center',
    },
    paper: {
      width:'15%',
      height: '20%',
      display:'flex',
      borderRadius:'4px',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #ffba0070',
      padding: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
    },
}));
function ErrorModal() {

    const classes = useStyles();
    const [errorModal,setErrorModal ] = useRecoilState(errorModalState);
    const [error,] = useRecoilState(errorState);

    const handleClose = () => {
        setErrorModal(false);
    }
    return (
        <Modal
        open={errorModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={`${classes.modal} animate__animated animate__bounce`}
        >
            <div className={`${classes.paper} animate__animated animate__fadeIn`}>
                <div className="container" style={{alignItems: 'center'}}>
                    <center>
                        <h3>Alert !!</h3>
                        <h4>{error}</h4>
                    </center>
                </div>
            </div>
        </Modal>
    )
}

export default ErrorModal
