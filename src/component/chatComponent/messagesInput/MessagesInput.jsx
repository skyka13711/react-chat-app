
import React, { useState } from 'react';
import { Input } from 'antd';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons'

import style from './MessagesInput.module.scss'

function MessagesInput({ sendMessages }) {

    const [value, setValue] = useState(null)

    const changeHandler = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className={style.messages__input}>
            <Input prefix={<SmileOutlined />}
                suffix={
                    [
                        <CameraOutlined />,
                        <AudioOutlined />,
                        <SendOutlined
                            onClick={() => {
                                sendMessages(value)
                                setValue('')
                            }}
                        />
                    ]
                }
                style={{ borderRadius: '4px' }}
                size='large'
                value={value}
                onChange={(e) => changeHandler(e)}
                placeholder='Введите текст сообщения…'
            />
        </div>
    )

}

export default MessagesInput;
