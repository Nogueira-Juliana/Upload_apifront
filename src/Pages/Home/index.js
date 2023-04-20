import '../../index.css';
import logo from '../../assets/tlogo.png';
import profileIcon from '../../assets/ProfileArea.svg';
import profileArrow from '../../assets/Profile-arrow.svg';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import { getDateFormated } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { removeItem } from '../../utils/storage';
import BtnUpload from '../../components/BtnUpload';

export default function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);

    async function handleExit() {
        try {
            removeItem('token');
            removeItem('idUser');
            navigate('/login');

        } catch (error) {
            console.log(error.message);
        }
    }

    async function detailUser() {
        const response = await api.get('/user', {
            headers: {
                Authorization: `Bearer ${getItem('token')}`
            }
        });
        setUser(response.data);
    }

    async function loadTransactions() {
        try {
            const response = await api.get(`/transactions`, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });
            setData(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    async function handleSendFile(file) {
        const formData = new FormData();
        formData.append('csvfile', file);
        console.log(formData)
        try {
            const response = await api.post('/upload', formData, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });
            console.log(response);
            console.log('Arquivo enviado com sucesso!');

        } catch (error) {
            console.error('Erro ao enviar arquivo:', error);
        }
    };

    useEffect(() => {
        loadTransactions();
        detailUser();
    }, []);

    return (
        < div className='user-dashboard' >
            <div className='user-area'>
                <img src={logo} alt='logo' className='sticker' />
                <div className='user-informations'>
                    <img src={profileIcon} alt='profileicon' />
                    <h2>{user.nome}</h2>
                    <img src={profileArrow} onClick={handleExit} alt='profilearrow' />
                    <img />
                </div>
            </div>
            <div className='user-transactions'>
                <table>
                    <tr>
                        <th>Data de lançamento</th>
                        <th>Saldo</th>
                        <th>Documento</th>
                    </tr>

                    {data.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{getDateFormated(data.data_lancamento)}</td>
                                <td>{data.saldo}</td>
                                <td>{data.documento}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <BtnUpload
                onFileSelected={handleSendFile}
            />
        </div >
    );
}

