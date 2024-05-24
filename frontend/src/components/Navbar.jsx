import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../axiosConfig';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../components/Avatar.jsx';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout');
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const { authStatusRef, userEmail } = useContext(AuthContext);

    console.log('Navbar authStatusRef:', authStatusRef.current)
    console.log('Navbar userEmail:', userEmail)

    return (
        <nav className="bg-slate-400 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="flex items-center">
                    {authStatusRef.current ? (
                        <>
                            <div className=' m-3 flex items-center justify-center'>
                                <Avatar name={userEmail} size='big' />
                            </div>
                            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="bg-blue-500 px-4 py-2 rounded">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
