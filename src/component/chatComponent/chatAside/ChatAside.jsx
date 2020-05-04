import React from 'react';
import style from './ChatAside.module.scss'

import AsideHeader from './Header/AsideHeader';
import AsideSearch from './Search/AsideSearch';

function ChatAside() {

    return (
        <aside className={style.aside}>
            <AsideHeader />

            <div className={style.aside__input}>
                <AsideSearch />
            </div>

        </aside>
    )
}

export default ChatAside;
