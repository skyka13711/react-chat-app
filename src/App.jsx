import React from 'react';

import style from './App.module.scss';
import AuthForm from './component/authComponent/authForm/AuthForm';
import { Route, Redirect } from 'react-router-dom';
import RegistrationForm from './component/authComponent/registration/RegistrationForm';
import Chat from './component/chatComponent/Container/Chat';

const App = () => {
  return (
    <div className={style.app}>
      <Route exact path="/" render={() => <Redirect to={'im'} />} />

      <Route path="/auth" render={() =>
        (<div className={style.form__contaier}> <AuthForm /></div>)} />
      <Route path="/registration" render={() =>
        (<div className={style.form__contaier}><RegistrationForm /></div>)} />
      <Route path="/im" render={() =>
        (
          <div className={style.container}>
            <Chat />
          </div>)}
      />

    </div>
  );
}

export default App;
