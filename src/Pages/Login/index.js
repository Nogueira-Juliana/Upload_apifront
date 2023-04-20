import '../../index.css';
import logo from '../../assets/tlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { getItem, setItem } from '../../utils/storage';

import api from '../../services/api';
import { useEffect, useState } from 'react';

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    function handleChangeInput(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    async function LogUser(event) {
        event.preventDefault();

        try {
            const response = await api.post('/login', { senha: form.senha, email: form.email });
            const { token, idUser } = response.data;

            setItem('token', token);
            setItem('idUser', idUser);

            navigate('/home');
        } catch (error) {
            alert('Usuário ou senha inválidos');
            return
        }
    }

    useEffect(() => {
        const token = getItem('token');
        if (token) {
            navigate('/home');
        }
    }, []);

    return (
        <div className='container'>
            <img src={logo} alt='logo' className='sticker-login-top' />
            <img src={logo} alt='logo' className='sticker-login-bottom' />
            <h1>Entre na sua conta</h1>
            <div className='login-cards-container displayflex-column'>
                <form className='displayflex-column'>
                    <div className='form-content'>
                        <label>E-mail</label>
                        <input
                            name='email'
                            type='email'
                            value={form.email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='form-content'>
                        <label>Senha</label>
                        <input
                            name='senha'
                            type='password'
                            value={form.senha}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button onClick={LogUser} className='btn-default'>Entrar</button>
                    <Link to='PasswordReset'><h3>Esqueci minha senha!</h3></Link>
                </form>
            </div>
            <div className='container-top'>
                <h4>Não tem cadastro?</h4>
                <Link className='btn-default' to='/login/register'><button className='btn-default'>Cadastre-se</button></Link>

            </div>
        </div>
    );
}
