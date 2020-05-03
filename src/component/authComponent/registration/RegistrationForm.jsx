import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { Link } from 'react-router-dom';
import FormTitle from '../formTitle/FormTitle';
import ConfirmEmail from './ConfirmEmail';

function RegistrationForm() {

    const [isSucces, setSucces] = useState(false)

    return (
        <>
            <FormTitle
                title='Регистрация'
                descr=' Для входа в чат, вам нужно зарегистрироваться'
            />

            <Modal>
                {!isSucces
                    ? <>
                        <Link to='auth'>Войти в аккаунт</Link>
                    </>
                    : <ConfirmEmail />
                }

            </Modal>
        </>
    )

}




export default RegistrationForm;
