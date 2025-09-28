// src/components/Arts.js
import React, { useState } from 'react';
import './Arts.css';

const artsData = [
  {
    src: 'media/arts1.jpg',
    title: 'Traditional Art',
    description: 'Explore the beauty of traditional crafts.',
    info: 'Traditional art represents the history and culture of a particular community, with intricate designs passed down through generations.',
  },
  {
    src: 'media/arts2.jpg',
    title: 'Modern Art',
    description: 'Experience the creativity of modern art.',
    info: 'Modern art often breaks away from traditional forms, embracing abstract ideas, bold colors, and expressive techniques.',
  },
  {
    src: 'media/arts3.jpg',
    title: 'Handicrafts',
    description: 'Discover beautiful handmade items.',
    info: 'Handicrafts are carefully crafted by artisans, showcasing unique textures and traditional methods passed down over generations.',
  },

  {
    src: 'media/arts4.jpg',
    title: 'Sculpture',
    description: 'Marvel at the craftsmanship of sculptures.',
    info: 'Sculptures are 3D art forms, ranging from intricate carvings to monumental works, often made from stone, wood, or metal.',
  },

  {
    src: 'media/arts5.jpg',
    title: 'Flower crafts',
    description: 'Flower crafts involve creating decorative items or artwork using various types of flowers, both real and artificial. ',
    info: 'This craft can include activities such as flower arranging, making floral wreaths, creating dried flower bouquets, and crafting with paper or fabric flowers.',
  },
  {
    src: 'media/arts6.jpg',
    title: 'Textile arts ',
    description: 'Textile arts encompass a wide range of creative practices that involve manipulating fibers and fabrics to create functional and decorative items.  ',
    info: 'This craft includes techniques such as weaving, sewing, embroidery, quilting, and fabric dyeing. Textile arts allow for immense creativity and expression, often resulting in unique pieces that reflect personal style and cultural heritage.',
  },

  {
    src: 'media/arts7.jpg',
    title: 'Embroidery',
    description: 'Embroidery is the art of decorating fabric or other materials using a needle to stitch thread or yarn. ',
    info: 'Embroidery may also incorporate other materials such as pearls, beads, quills, and sequins. In modern days, embroidery is usually seen on hats, clothing, blankets, and handbags. Embroidery is available in a wide variety of thread or yarn colour. It is often used to personalize gifts or clothing items.',
  },
  {
    src: 'media/arts8.jpg',
    title: 'Book Binding ',
    description: 'Bookbinding is the process of building a book, usually in codex format, from an ordered stack of paper sheets with hands and tools, or in modern publishing, by a series of automated processes ',
    info: 'Bookbinding is a skilled trade that requires measuring, cutting, and gluing. A finished book requires many steps to complete. This is usually determined by the materials needed and the layout of the book. Bookbinding combines skills from the trades of paper making, textile and leather-working crafts, model making, and graphic design in order to create a book. ',
  },
  {
    src: 'media/arts9.jpg',
    title: 'Musical Arts',
    description: ' A universal language, music resonates with souls across cultures.',
    info: ' From ancestral tribal beats to contemporary genres, music has been the heartbeat of societies, expressing emotions and narrating tales without uttering a word.',
  },
  {
    src: 'media/arts10.jpg',
    title: 'Cinema Arts',
    description: ' A relatively recent entrant, cinema is a multi-sensory experience.',
    info: 'By weaving together visuals, sound, and narratives, filmmakers create magic on screen. Directors like Stanley Kubrick and George Lucas have transformed cinema into an art form that globally cherished. ',
  },
];

const Arts = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleArtClick = (art) => setSelectedArt(art);
  const closeModal = () => setSelectedArt(null);

  return (
    <div className="arts-container">
      <h1>Explore Arts & Crafts</h1>
      <div className="arts-grid">
        {artsData.map((art, index) => (
          <div
            key={index}
            className="art-card"
            onClick={() => handleArtClick(art)}
          >
            <div className="art-image-wrapper">
              <img src={art.src} alt={art.title} className="art-image" />
            </div>
            <h3>{art.title}</h3>
            <p>{art.description}</p>
          </div>
        ))}
      </div>

      {selectedArt && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedArt.src} alt={selectedArt.title} className="modal-image" />
            <h2>{selectedArt.title}</h2>
            <p>{selectedArt.info}</p>
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arts;
