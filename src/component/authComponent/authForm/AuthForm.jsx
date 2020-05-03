
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import FormTitle from '../formTitle/FormTitle';

function AuthForm() {

    return (
        <>
            <FormTitle title='Войти в аккаунт' descr='Пожалуйста, войдите в свой аккаунт'
            />
            <Modal>
                <Link to='registration'> Регистрация </Link>
            </Modal>
        </>
    )
}

export default AuthForm;
