
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import Modal from '../modal/Modal';
import FormTitle from '../formTitle/FormTitle';

function AuthForm() {

    const onFinish = values => {
        console.log(values);
    };

    return (
        <>
            <FormTitle
                title='Войти в аккаунт'
                descr='Пожалуйста, войдите в свой аккаунт'
            />
            <Modal>
                <Form
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"

                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Username"
                            size='large'
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"

                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Пароль"
                            size='large'
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button style={{ width: '100%', height: '56px', fontSize: '16px', fontWeight: 500 }} type="primary" htmlType="submit" >
                            ВОЙТИ В АККАУНТ
                         </Button>
                    </Form.Item>
                </Form>
                
                <Link to='registration'> Регистрация </Link>
            </Modal>
        </>
    )
}

export default AuthForm;
