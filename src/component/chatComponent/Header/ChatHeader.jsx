
import React from 'react';


import style from './ChatHeader.module.scss'
import headerBtn from '../../../assets/img/header_btn.png'


function ChatHeader() {

    const isOnline = false

    return (
        <header className={style.header}>

            <div className={style.chat__wrapper}>
                <div className={style.chat__name}>Гай Юлий Цезарь</div>
                <div className={style.descr}>
                    <div className={style.circle + ' ' + ` ${isOnline ? style.active : ''}`} /> {isOnline ? "онлайн" : "не в сети"}
                </div>
            </div>

            <span className={style.header__btn}><img src={headerBtn} /></span>

        </header>
    )
}

export default ChatHeader;
