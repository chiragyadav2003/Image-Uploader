import React, { useState } from 'react';
import axios from '../../axiosConfig.js';

const UploadImage = ({ token, fetchImages }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const handleUploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        try {
            await axios.post('/api/images', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchImages();
        } catch (error) {
            console.error('Upload image error:', error);
        }
    };

    return (
        <form onSubmit={handleUploadImage} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
            <input
                type="text"
                placeholder="Image Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 p-2 w-full border rounded"
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="mb-4 p-2 w-full border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Upload Image</button>
        </form>
    );
};

export default UploadImage;
