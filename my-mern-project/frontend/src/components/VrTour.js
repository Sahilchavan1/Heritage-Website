import React from 'react';
import { useTranslation } from 'react-i18next'; // Import translation hook
import Navbar from './Navbar';
import Footer from './Footer';
import './VrTour.css';

const VrTour = () => {
  const { t } = useTranslation(); // Initialize translation

  const handleCardClick = (imagePath) => {
    const viewerHtml = `
      <html>
        <head>
          <title>${t('360 View')}</title>
          <style>
            body { margin: 0; overflow: hidden; }
          </style>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/examples/jsm/controls/OrbitControls.js"></script>
        </head>
        <body>
          <div id="panorama" style="width:100vw; height:100vh;"></div>
          <script>
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 0.1);
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById("panorama").appendChild(renderer.domElement);
            const textureLoader = new THREE.TextureLoader();
            const texture = textureLoader.load('${imagePath}', () => {
              const geometry = new THREE.SphereGeometry(500, 60, 40);
              geometry.scale(-1, 1, 1);
              const material = new THREE.MeshBasicMaterial({ map: texture });
              const sphere = new THREE.Mesh(geometry, material);
              scene.add(sphere);
              animate();
            });
            
            const controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.rotateSpeed = 0.1;
            controls.enableZoom = false;
            controls.enablePan = false;

            function animate() {
              requestAnimationFrame(animate);
              controls.update();
              renderer.render(scene, camera);
            }

            window.addEventListener("resize", () => {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
            });
          </script>
        </body>
      </html>
    `;

    const viewer = window.open();
    viewer.document.write(viewerHtml);
    viewer.document.close();
  };

  return (
    <div className="vr-tour-container">
      <Navbar />
      <h1 className="vr-tour-title">{t('virtualTour')}</h1>
      <div className="tiles-container">
        <div className="tile-card" onClick={() => handleCardClick('/media/panorama1.jpg')}>
          <img src="/media/heritage-site-1.jpg" alt={t('heritageSite') + " 1"} />
          <h3>{t('heritageSite')} 1</h3>
        </div>
        <div className="tile-card" onClick={() => handleCardClick('/media/panorama2.jpg')}>
          <img src="/media/heritage-site-2.jpg" alt={t('heritageSite') + " 2"} />
          <h3>{t('heritageSite')} 2</h3>
        </div>
        <div className="tile-card" onClick={() => handleCardClick('/media/panorama3.jpg')}>
          <img src="/media/heritage-site-3.jpg" alt={t('heritageSite') + " 3"} />
          <h3>{t('heritageSite')} 3</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VrTour;

