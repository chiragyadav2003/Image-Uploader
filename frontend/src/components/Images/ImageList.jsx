import React from 'react';

const ImageList = ({ images }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {images.map((image) => (
                <div key={image._id} className="flex flex-col items-center">
                    <img src={`http://localhost:5000/${image.url}`} alt={image.name} className="w-full h-48 object-cover rounded mb-2" />
                    <p>{image.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ImageList;
