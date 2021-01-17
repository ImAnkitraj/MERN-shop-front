import { Modal } from '@material-ui/core'
import React from 'react'
import { useRecoilState } from 'recoil'
import { detailModalState } from '../../store/atoms/atoms'
import './DetailModal.css'
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom'

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
function ErrorModal() {
    const history = useHistory();
    const classes = useStyles();
    const [detailModal, setDetailModal] = useRecoilState(detailModalState)
    const handleClose = () => {
        setDetailModal(false);
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
                    error
                </div>
            </div>
        </Modal>
    )
}

export default ErrorModal
