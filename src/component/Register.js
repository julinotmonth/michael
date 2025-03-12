import React, { useState } from 'react'
import axios from "axios";
import LoginPage, { Reset, Logo, Password, Footer, Username, Input } from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';
import Login from '../component/Login';
import { useNavigate } from "react-router-dom";
 
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <form onSubmit={Register}>
        <LoginPage  style={{ height: 580 }}>
            <Logo>
                <LoginLogo />
            </Logo>
            <Input />
            <Input />
            <Username />
            <Username placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Username placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Password value={password} visible={true} onChange={(e) => setPassword(e.target.value)} />  
        </LoginPage>
  </form>  
    )
}
 
export default Register;