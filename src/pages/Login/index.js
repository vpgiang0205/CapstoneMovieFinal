import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();

  

  const form = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('values', values);
    },
  });


  return (
    <div className='container d-flex justify-content-center align-items-center min-vh-100'>
      <form onSubmit={form.handleSubmit} className="form-group w-50 p-3"> {/* Added mt-5 for top margin */}
        <h2 className='text-center mb-4'>Login</h2>

        <div className='form-group'>
          <input type="text" name="username" onChange={form.handleChange} className="form-control" placeholder="Tên đăng nhập" aria-describedby="helpId" />
        </div>

        <div className='form-group'>
          <input type="password" name="password" onChange={form.handleChange} className="form-control" placeholder="Mật khẩu" aria-describedby="helpId" />
        </div>

        <div className='form-group text-center'>
          <button type='submit' className='w-100 btn btn-success' >Login</button>
        </div>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Bạn chưa có tài khoản ? <NavLink to="register" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
        </div>

      </form>
    </div>
  );
}
