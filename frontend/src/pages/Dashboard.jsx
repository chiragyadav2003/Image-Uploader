import React, { useContext, useEffect, useState } from 'react';
import axios from '../axiosConfig';
import CreateFolder from '../components/Folders/CreateFolder';
import FolderList from '../components/Folders/FolderList';
import UploadImage from '../components/Images/UploadImage';
import ImageList from '../components/Images/ImageList';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/authContext';
import { Home } from "./Home.jsx";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [images, setImages] = useState([]);


    const { authStatusRef } = useContext(AuthContext);
    console.log('App authStatusRef:', authStatusRef.current);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/auth/authStatus');
                setUser(response.data.user);
            } catch (error) {
                console.error('Fetch user error:', error);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('/api/images');
                setImages(response.data);
            } catch (error) {
                console.error('Fetch images error:', error);
            }
        };

        if (user) {
            fetchImages();
        }
    }, [user]);

    return (
        <>
            {
                !authStatusRef.current ? (<Home />) : (
                    <div className="min-h-screen bg-gray-100">
                        <Navbar user={user} setUser={setUser} />
                        <div className="container mx-auto p-8">
                            <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded shadow">
                                    <CreateFolder />
                                    <FolderList />
                                </div>
                                <div className="bg-white p-6 rounded shadow">
                                    <UploadImage />
                                    <h2 className="text-2xl font-bold mt-4">Images</h2>
                                    <ImageList images={images} />
                                </div>
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    );
};

export { Dashboard };
