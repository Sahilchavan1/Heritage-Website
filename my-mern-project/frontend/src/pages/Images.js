import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './Images.css';

const Images = () => {
  const { t } = useTranslation();
  const [likedImages, setLikedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  const images = [
    {
      id: 1,
      src: '/media/diwali.jpg',
      title: t('DIWALI'),
    },
    {
      id: 2,
      src: '/media/image2.jpg',
      title: t('image2Title'),
    },
    {
      id: 3,
      src: '/media/image3.jpg',
      title: t('image3Title'),
    },
    // Add more images as needed
  ];

  const toggleLike = (id) => {
    if (likedImages.includes(id)) {
      setLikedImages(likedImages.filter((imageId) => imageId !== id));
    } else {
      setLikedImages([...likedImages, id]);
    }
  };

  const downloadImage = (src) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop(); // Use the image name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openImage = (src) => {
    setSelectedImage(src); // Set the selected image to display in the modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Clear the selected image to close the modal
  };

  return (
    <div className="images-container">
      <h1>{t('IMAGE GALLERY')}</h1>
      <div className="images-grid">
        {images.map((image) => (
          <div key={image.id} className="image-tile" onClick={() => openImage(image.src)}>
            <img src={image.src} alt={image.title} />
            <h3>{image.title}</h3>
            <div className="image-actions">
              <button onClick={(e) => { e.stopPropagation(); toggleLike(image.id); }} className="like-button">
                <FontAwesomeIcon icon={likedImages.includes(image.id) ? solidHeart : regularHeart} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); downloadImage(image.src); }} className="download-button">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Images;