import '../../index.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function PasswordReset() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: ''
    });

    function handleChangeInput(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    async function handleSendEmail(event) {
        event.preventDefault();

        try {
            if (!form.email) return alert('Campo Obrigatório!');

            await api.post('/resetpass', { email: form.email });

            setForm({
                email: ''
            });

            navigate('/login');
            return alert('Email de recuperação enviado');

        } catch (error) {
            navigate('/login');
            return console.log(error.message);
        }
    }

    return (
        <div className='register-dashboard '>
            <form className='register-form displayflex-column'>
                <h3 className='password-reset-tittle'>Digite o email de Recuperação</h3>
                <div className='card-block displayflex-column'>
                    <label className='label-login'>E-mail</label>
                    <input className='register-input'
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChangeInput}
                    />
                </div>
                <button onClick={handleSendEmail} className='btn-default register-btn'>Enviar</button>
            </form>
        </div>
    );
}

