import React from 'react';
import style from './Modal.module.scss'


const Modal = ({ children }) => {
    return (
        <div className={style.modal}>
            {children}
        </div>
    )
}

export default Modal;
