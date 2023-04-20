import '../../index.css';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SetNewPassword() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        senha: ''
    });

    function handleChangeInput(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {//incluir email e token no post abaixo
            await api.post('/updatepass', { newPassword: form.senha });

            setForm({
                senha: ''
            });

            navigate('/login');
            return alert('Senha Atualizada com sucesso');

        } catch (error) {
            navigate('/login');
            return console.log(error.message);
        }
    }

    return (
        <div className='register-dashboard '>
            <form className='register-form displayflex-column'>
                <h3 className='password-reset-tittle'>Digite sua nova Senha</h3>
                <div className='card-block displayflex-column'>
                    <input className='register-input'
                        name='senha'
                        type='password'
                        value={form.senha}
                        onChange={handleChangeInput}
                    />
                </div>
                <button onClick={handleSubmit} className='btn-default register-btn'>Enviar</button>
            </form>
        </div>
    );
}

