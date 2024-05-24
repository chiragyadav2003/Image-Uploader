import { useState } from "react";
import axios from "../../axiosConfig.js";

const CreateFolder = ({ fetchFolders }) => {
    const [name, setName] = useState('');
    const [parentFolder, setParentFolder] = useState(null);

    const handleCreateFolder = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/folders', {
                name,
                parentFolder
            });
            console.log(res.data);
            fetchFolders();
        } catch (error) {
            console.error("Create folder error: ", error);
        }
    };

    return (
        <form onSubmit={handleCreateFolder} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Create Folder</h2>
            <input
                type="text"
                placeholder="Folder Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 p-2 w-full border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Create Folder</button>
        </form>
    )
};

export default CreateFolder;