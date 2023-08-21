import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { actAuth } from 'redux/types/_actions';

export default function Auth() {
  const error = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    taikhoan: "",
    matkhau: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actAuth(state, navigate));
  };

  if (localStorage.getItem("USER_LOGIN")) {
    return <Navigate replace to="/" />;
  }

  const renderError = () => {
    return (
      error && (
        <div className='alert alert-danger'> {error?.response.data.content}</div>
      )
    );
  };

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className="form-group w-75">

        <h1 className="text-center mb-4">Đăng nhập</h1>
        {renderError()}
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <input type="text" name="taikhoan" className="form-control" placeholder='Tên đăng nhập' onChange={handleOnChange} />
          </div>

          <div className='form-group'>
            <input type="password" name="matkhau" className="form-control" placeholder='Mật khẩu' onChange={handleOnChange} />
          </div>

          <div className='form-group'>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </div>

          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn chưa có tài khoản ? <NavLink to="register" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
