
import React from 'react';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import style from './AsideHeader.module.scss'

function AsideHeader() {
    return (
        <div className={style.header__side}>
            <UserOutlined style={{ fontSize: '18px', marginRight: '18px' }} />
            <span>Список диалогов</span>
            <EditOutlined
                style={{ fontSize: '18px', position: 'absolute', right: '18px' }} />
        </div>
    )
}

export default AsideHeader;
