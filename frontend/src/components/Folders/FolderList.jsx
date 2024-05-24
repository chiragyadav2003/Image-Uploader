import React, { useEffect, useState } from 'react';
import axios from '../../axiosConfig.js';

const FolderList = () => {
    const [folders, setFolders] = useState([]);

    const fetchFolders = async () => {
        try {
            const response = await axios.get('/api/folders');
            setFolders(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Fetch folders error:', error);
        }
    };

    useEffect(() => {
        fetchFolders();
    }, []);

    return (
        <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Folders</h2>
            <ul className="list-disc list-inside">
                {folders.map((folder) => (
                    <li key={folder._id} className="mb-2">{folder.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FolderList;
