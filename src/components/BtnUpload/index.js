import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

function BtnUpload() {
    const [file, setFile] = useState(null);
    const [token, setToken] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        api.post('/upload', formData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        const token = getItem('token');
        setToken(token);
    }, []);
    return (
        <form className='footer-form' onSubmit={handleSubmit} >
            <input type="file" name='file' onChange={handleFileChange} />
            <button type="submit" className='btn-little'>Enviar</button>
        </form>
    );
}

export default BtnUpload;