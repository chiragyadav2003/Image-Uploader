import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        folder: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Folder',
            default: null
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

const Image = mongoose.model('Image', imageSchema);

export default Image;