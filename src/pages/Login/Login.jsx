import React, { useState } from 'react';
import PostService from "API/PostService";
import './Login.scss';

const Login = () => {
    const [data, setData] = useState({
        name: '',
        password: ''
    })

    const fetchUsers = async () => {
        const userResponse = await PostService.getUsers();
        console.log(userResponse);
    };

    const formSubmit = (event) => {
        event.preventDefault();

        console.log(data);
        fetchUsers()
    }

    return (
        <main className='login-page'>
            <div className="polygon-gradient_background login">
                <section className="login_section container_box">
                    <h1 className="title">Login</h1>
                    <form onSubmit={formSubmit}>
                        <div className="input_wrapper">
                            <input
                                type="text"
                                id='name'
                                onInput={e => setData({ ...data, [e.target.id]: e.target.value })}
                                value={data.name}
                                autoComplete="off"
                            />
                            <label className={data.name && 'active'} htmlFor="name">Name</label>
                        </div>
                        <div className="input_wrapper">
                            <input
                                type="password"
                                id='password'
                                onInput={e => setData({ ...data, [e.target.id]: e.target.value })}
                                value={data.password}
                                autoComplete="off"
                            />
                            <label className={data.password && 'active'} htmlFor="password">Password</label>
                        </div>
                        <button type='submit' className={!(data.name && data.password) ? 'disabled' : null}>Submit</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Login;