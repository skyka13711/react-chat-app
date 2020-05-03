import React from 'react';

import style from './App.module.scss';
import AuthForm from './component/authComponent/authForm/AuthForm';
import { Route, Redirect } from 'react-router-dom';
import RegistrationForm from './component/authComponent/registration/RegistrationForm';

const App = () => {
  return (
    <div className={style.app}>
      <Route exact path="/" render={() => <Redirect to={'auth'} />} />

      <Route path="/auth" render={() =>
        (<div className={style.contaier}> <AuthForm /></div>)} />
      <Route path="/registration" render={() =>
        (<div className={style.contaier}><RegistrationForm /></div>)} />

    </div>
  );
}

export default App;
