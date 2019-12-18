/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { registerAccount } from '../../actions';

const SignupForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(registerAccount({username, password, address}));
      props.history.push('/login');
  }
  return (
    <div>
      <div className='row'>
        <div className='col-sm-6 col-md-4 offset-md-4'>
          <div className='card text-center'>
            <div className='card-header bg-success text-white'>
              <strong>First time with us? Sign up now!</strong>
            </div>
            <div className='card-body'>
              <form role='form' action='#' method='POST' onSubmit={handleSubmit}>
                <fieldset>
                  <div className='row'>
                    <div className='mx-auto'>
                      <img
                        className='mb-3 rounded-circle'
                        src='https://img.icons8.com/bubbles/100/000000/user.png'
                        alt='missing'
                      />
                    </div>
                  </div>
                  <div className='row text-left'>
                    <div className='col-sm-12 col-md-10 offset-md-1 px-0'>
                      <div className='form-group'>
                        <label>Username</label>
                        <input
                          className='form-control'
                          placeholder='Ex: Vphong'
                          name='loginname'
                          type='text'
                          value={username}
                          onChange={e => setUsername(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          className='form-control'
                          placeholder='At least 4 characters'
                          name='password'
                          type='password'
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Address (For shipping)</label>
                        <input
                          className='form-control'
                          placeholder='Ex: Can Tho, Vietnam'
                          name='password'
                          type='text'
                          value={address}
                          onChange={e => setAddress(e.target.value)}
                        />
                      </div>
                      <div className='form-group'>
                        <button
                          type='submit'
                          className='btn btn-lg btn-primary btn-block'
                        >
                          <i className='fa fa-user-plus mr-2'></i>
                          Sign up
                        </button>
                      </div>
                      <hr className='mb-1' />
                      <div className='text-center'>Or</div>
                      <Link
                        to='/login'
                        className='btn btn-success btn-lg btn-block'
                      >
                        <i className='fa fa-sign-in mr-2'></i>
                        Login
                      </Link>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;