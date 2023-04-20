import '../../index.css';
import api from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    function handleChangeInput(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    async function AddUser(event) {
        event.preventDefault();

        try {
            if (!form.nome || !form.email || !form.senha) return alert('Todos os campos precisam ser preenchidos!');

            await api.post('/register', { nome: form.nome, senha: form.senha, email: form.email });

            setForm({
                nome: '',
                email: '',
                senha: ''
            });
            alert('Cadastro realizado com sucesso!');
            navigate('/login');
            return
        } catch (error) {
            alert('Usuário já existe!');
            navigate('/login');
            return
        }
    }

    return (
        <div className='register-dashboard '>
            <form className='register-form displayflex-column'>
                <h3 className='tittleh3-text'>Cadastre-se</h3>
                <div className='card-block displayflex-column'>
                    <label className='label-login'>Nome</label>
                    <input className='register-input'
                        name='nome'
                        type='text'
                        value={form.nome}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className='card-block displayflex-column'>
                    <label className='label-login'>E-mail</label>
                    <input className='register-input'
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChangeInput}
                    />
                </div>
                <div className='card-block displayflex-column'>
                    <label className='label-login'>Senha</label>
                    <input className='register-input'
                        name='senha'
                        type='password'
                        value={form.senha}
                        onChange={handleChangeInput}
                    />
                </div>
                <button onClick={AddUser} className='btn-default register-btn'>Cadastrar</button>
                <Link className='login-link' to='/login'>Já tem Cadastro? Clique aqui!</Link>
            </form>
        </div>
    );
}

