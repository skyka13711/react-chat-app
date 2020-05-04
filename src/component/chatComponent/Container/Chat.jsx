import React from 'react';
import style from './Chat.module.scss'


import ChatHeader from '../Header/ChatHeader';
import ChatContent from '../chatContent/ChatContent';
import ChatAside from '../chatAside/ChatAside';


function Chat() {



    return (
        <div className={style.container}>
            <ChatHeader />
            <ChatAside />
            <ChatContent />
        </div>
    )
}

export default Chat;
