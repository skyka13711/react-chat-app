import React from 'react';
import style from './Messages.module.scss'
import avatar from '../../../assets/img/test.png'

function Messages({ user, text, date, isMe }) {
    return (
        <div className={style.Messages + " " + `${isMe && style.me}`}>

            <div className={style.avatar}>
                <img src={user.avatar || avatar} alt={'avatar ' + user.fullName} />
            </div>

            <div className={style.buble}>
                <div
                    className={style.buble__content + ' ' + `${isMe
                        ? style.white
                        : style.blue}
                    `}>
                    {text}
                </div>
                <div className={style.date}>{date}</div>
            </div>

        </div>
    )
}



export default Messages;
