import React from 'react';
import '../auth.css'
import { useForm } from "../../../utils/hooks";

const Register = () => {

    return (
        <form>
            <div className='header'>
                <h3>Register</h3>
            </div>
            <div className="form_body">
                <div className="mb-3">
                    <label>Full names:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        name="userName" 
                        // onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Display name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Display name" 
                        name="displayName" 
                        // onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Email address:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        // onChange={onChange}
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        name="password" 
                        // onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Confirm password:</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        name="confirmPassword" 
                        // onChange={onChange}
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
            </div>
            {/* {errors.map((error) => {
                return (
                    <Alert>
                    {error.message}
                    </Alert>
                )
            })}, */}
        </form>  
    )
}

export default Register