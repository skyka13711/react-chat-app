import React from 'react';
import style from './FormTitle.module.scss'


const FormTitle = (props) => {
    return (
        <>
            <h1 className={style.title}>{props.title}</h1>
            <h2 className={style.descr}>{props.descr}</h2>
        </>
    )
}

export default FormTitle;
