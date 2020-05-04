import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import Modal from '../modal/Modal';
import FormTitle from '../formTitle/FormTitle';
import ConfirmEmail from './ConfirmEmail';
import style from './RegistrationForm.module.scss'



function RegistrationForm() {

    const [isSucces, setSucces] = useState(false)
    const onFinish = values => {
        setSucces(true)
        console.log(values);
    };


    return (
        <>
            <FormTitle
                title='Регистрация'
                descr=' Для входа в чат, вам нужно зарегистрироваться'
            />

            <Modal>
                {!isSucces
                    ? <>
                        <Form name="nest-messages" onFinish={onFinish}>

                            <Form.Item name={'email'}  >
                                <Input
                                    placeholder="E-Mail"
                                    size='large'
                                    prefix={<MailOutlined />}
                                />
                            </Form.Item>

                            <Form.Item name={'name'}  >
                                <Input
                                    placeholder="Ваше имя"
                                    size='large'
                                    prefix={<UserOutlined />}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"

                            >
                                <Input.Password size='large'
                                    placeholder="Пароль"
                                    prefix={<LockOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}

                            >
                                <Input.Password size='large'
                                    placeholder="Повторить пароль"
                                    prefix={<LockOutlined />} />
                            </Form.Item>


                            <Form.Item >
                                <Button type="primary"
                                    htmlType="submit"
                                    className={style.register__btn}
                                >
                                    ЗАРЕГИСТРИРОВАТЬСЯ
                                </Button>
                            </Form.Item>

                        </Form>
                        <Link to='auth'>Войти в аккаунт</Link>

                    </>
                    : <ConfirmEmail />
                }

            </Modal>
        </>
    )

}







export default RegistrationForm;
