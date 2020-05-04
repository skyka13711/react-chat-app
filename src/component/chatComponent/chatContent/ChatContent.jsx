import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ruLocale from 'date-fns/locale/ru'
import React, { useState } from 'react';

import Messages from '../messages/Messages'
import MessagesInput from '../messagesInput/MessagesInput';
import style from './ChatContent.module.scss'

function ChatContent() {

    const staticMessages = [
        {
            user: { lastName: 'test', avatar: null },
            text: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻',
            date: 'Tue May 05 2020 00:54:38 ',
            isMe: true
        },
        {
            user: { lastName: 'test', avatar: null },
            text: 'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻',
            date: 'Tue May 05 2020 00:54:38 ',
            isMe: false
        },
    ]

    const [messages, setMessages] = useState(staticMessages)

    const sendMessages = (text) => {
        const obj = {
            user: { lastName: 'test', avatar: null },
            text,
            date: formatDistanceToNow(new Date(), { addSuffix: true, locale: ruLocale }),
            isMe: true
        }
        setMessages([
            ...messages,
            obj
        ])
    }

    return (
        <div className={style.content}>
            <div className={style.messages}>
                {messages.map(item => <Messages
                    text={item.text}
                    user={item.user}
                    date={item.date}
                    isMe={item.isMe}
                />
                )}
            </div>

            <MessagesInput sendMessages={sendMessages} />
        </div>
    )
}

export default ChatContent;
