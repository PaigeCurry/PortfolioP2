// ===== LIGHTBOX SCRIPT =====
(() => {
    // Grab all gallery images
    const galleryImages = document.querySelectorAll('.gallery img');

    // Create lightbox elements
    const lightbox = document.createElement('div');
    const lightboxImg = document.createElement('img');
    const closeBtn = document.createElement('span');

    lightbox.classList.add('lightbox');
    lightboxImg.classList.add('lightbox-img');
    closeBtn.classList.add('close');
    closeBtn.innerHTML = '&times;';

    // Append elements
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // ===== FUNCTIONS =====
    const openLightbox = (src, alt) => {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        lightboxImg.alt = alt;
        document.body.style.overflow = 'hidden'; // prevent background scroll
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // ===== EVENT LISTENERS =====
    galleryImages.forEach(img => {
        img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });

    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
    });
})();