import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom'
import { actAuth } from 'redux/types/_actions';

export default function Auth() {
  const error = useSelector((state) => state.authReducer.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [state, setState] = useState({
    taikhoan: "",
    matkhau: ""
  });


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(actAuth(state,navigate))
  }

  if (localStorage.getItem("USER_LOGIN")) {
    return <Navigate replace to = "/" />
  }

  const renderError = () => {

    return (
      error && (
        <div className=' alert alert-danger'> {error?.response.data.content}</div>
      )
    )
  }

  return (
    <div className='container'>
      <div className="form-group">

        <h1>Login</h1>
        {renderError()}
        <form onSubmit={handleLogin}>
          <div className='form-group'>
            <label>Username:</label>
            <input type="text" name="taikhoan" className="form-control" onChange={handleOnChange} />

          </div>

          <div className='form-group'>

            <label>Username:</label>
            <input type="text" name="matkhau" className="form-control" onChange={handleOnChange} />
          </div>

          <div className='form-group'>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </form>
      </div>

    </div >
  )
}