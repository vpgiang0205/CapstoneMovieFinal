import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actRegister } from 'redux/types/_actions';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const serverError = useSelector((state) => state.registerReducer.error); 


  const initialUserState = {
    taiKhoan: '',
    matKhau: '',
    email: '',
    soDt: '',
    hoTen: '',
  };
  const initialState = {
    user: { ...initialUserState },
    errors: { ...initialUserState },
    formValid: false,
  };
  
  const [state, setState] = useState(initialState);
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let mess = '';
    let { formValid, errors } = state;

    switch (name) {
      case 'taiKhoan':
        mess = value.trim() ? '' : 'Tài khoản không được để trống!';
        if (value && value.trim().length < 4) {
          mess = 'Tài khoản phải có ít nhất 4 kí tự.';
        }
        break;

      case 'matKhau':
        mess = value.trim() ? '' : 'Mật khẩu không được để trống!';
        break;

      case 'email':
        if (!value.match("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")) {
          mess = "Vui lòng điền lại email đúng định dạng";
        }
        break;

      case 'soDt':
        // Add phone number validation logic here
        mess = value.trim() ? '' : 'Số điện thoại không được để trống!';
        if (!value.match(/^(?:\+84|0)(1\d{9}|3\d{8}|5\d{8}|7\d{8}|8\d{8}|9\d{8})$/)) {
          mess = 'Vui lòng điền lại số điện thoại đúng định dạng (VD: +84901234567, 0901234567)';
        }
        break;

      case 'hoTen':
        mess = value.trim() ? '' : 'Tên không được để trống!';
        break;

      default:
        break;
    }

    errors[name] = mess;
    formValid = Object.values(errors).every((error) => error === '');

    setState({
      ...state,
      errors: { ...errors },
      user: {
        ...state.user,
        [name]: value,
      },
      formValid: formValid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch
    dispatch(actRegister(state.user, navigate));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <h2 className="mb-4">Register</h2>
        {serverError && <div className="text-danger">{serverError}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="taiKhoan"
              className="form-control" required
              onChange={handleOnChange}
              value={state.user.taiKhoan}
            />
            {state.errors.taiKhoan && <div className="text-danger">{state.errors.taiKhoan}</div>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password" required
              name="matKhau"
              className="form-control"
              onChange={handleOnChange}
              value={state.user.matKhau}
            />
            {state.errors.matKhau && <div className="text-danger">{state.errors.matKhau}</div>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email" required
              name="email"
              className="form-control"
              onChange={handleOnChange}
              value={state.user.email}
            />
            {state.errors.email && <div className="text-danger">{state.errors.email}</div>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type='text' required
              name="soDt"
              className="form-control"
              onChange={handleOnChange}
              value={state.user.soDt}
            />
            {state.errors.soDt && <div className="text-danger">{state.errors.soDt}</div>}
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type='text' required
              name="hoTen"
              className="form-control"
              onChange={handleOnChange}
              value={state.user.hoTen}
            />
            {state.errors.hoTen && <div className="text-danger">{state.errors.hoTen}</div>}
          </div>

          <button type="submit" className="btn btn-success" disabled={!state.formValid}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
