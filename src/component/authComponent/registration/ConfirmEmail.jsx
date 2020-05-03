import React from 'react';
import {
    InfoCircleTwoTone
} from '@ant-design/icons';
import style from './ConfirmEmail.module.scss'


const ConfirmEmail = () => {
    return (
        <div className={style.confirm__mail}>
            <InfoCircleTwoTone style={{ fontSize: '50px', marginBottom: '15px' }} />

            <h3 style={style.title}>Подтвердите свой аккаунт</h3>
            <p style={style.descr}>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
        </div>
    )
}

export default ConfirmEmail;
