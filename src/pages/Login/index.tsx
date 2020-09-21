import React, { useEffect } from 'react';
import './login.scss';
import AuthLayout from 'components/Auth/Layout';
import LoginForm from 'components/Auth/LoginForm';
import login from 'redux/actions/auth/login';
import { IUnknownObject } from 'interfaces/unknownObject';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from 'redux/initialStates';
import { useHistory } from 'react-router-dom';
import { isAuthenticated } from 'helpers/getToken';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const { loading, error } = useSelector(
    ({ auth: { login: loginStore } }: IRootState) => loginStore,
  );

  const handleSubmit = (data: IUnknownObject) => {
    login(data)(push, dispatch);
  };

  useEffect(() => {
    if (isAuthenticated()) push('/');
  }, [push]);

  return (
    <div className="login bg-primary-light">
      <AuthLayout
        title="login"
        subTitle="Welcome back. Please login to your account"
        FormLayout={LoginForm}
        action="login"
        handleSubmit={handleSubmit}
        state={{ loading, error }}
      />
    </div>
  );
};

export default Login;
