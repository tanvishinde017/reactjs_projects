import React, { useState } from 'react'

function AuthForm() {
    const [IsLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className='container'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={IsLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!IsLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>

                {IsLogin ? (
                    <div className='form'>
                        <h2>Login Form</h2>
                        <input type='email' placeholder='Email' />
                        <div className='password-field'>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        <a href='#'>Forgot password?</a>
                        <button>Login</button>
                        <p>Not a Member? <a href='#' onClick={() => setIsLogin(false)}>SignUp Now</a></p>
                    </div>
                ) : (
                    <div className='form'>
                        <h2>SignUp Form</h2>
                        <input type='email' placeholder='Email' />
                        <div className='password-field'>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Password' />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        <div className='password-field'>
                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' />
                            <button
                                type='button'
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                        <button>SignUp</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AuthForm;
