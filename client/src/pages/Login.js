import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login, clearError } from "../auth/auth.actions";

import LoginForm from "../auth/components/LoginForm";

const Login = () => {
  const { loading, error, message } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, []);

  return (
    <div className="pt-10 md:pt-20 flex items-center justify-center">
      <LoginForm
        message={message}
        onSubmit={data => dispatch(login(data))}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default Login;
