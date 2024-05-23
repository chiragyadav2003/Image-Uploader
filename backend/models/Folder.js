import mongoose from 'mongoose';

const folderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        parentFolder: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Folder'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Folder = mongoose.model('Folder', folderSchema);

export default Folder;