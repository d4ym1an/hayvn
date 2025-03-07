document.querySelector('.about').addEventListener('click', function() {
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection.style.display = 'block';
    setTimeout(() => {
        aboutMeSection.style.opacity = '1'; // Set opacity to 1 to trigger transition
    }, 10); // Slight delay to trigger the transition
});

document.getElementById('close-about-me').addEventListener('click', function(event) {
    event.preventDefault();
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection.style.opacity = '0'; // Set opacity to 0 to trigger transition
    setTimeout(() => {
        aboutMeSection.style.display = 'none';
    }, 500); // Match the transition duration
});

document.querySelector('.socials').addEventListener('click', function() {
    const socialsSection = document.getElementById('socials');
    socialsSection.style.display = 'block';
    setTimeout(() => {
        socialsSection.style.opacity = '1'; // Set opacity to 1 to trigger transition
    }, 10); // Slight delay to trigger the transition
});

document.getElementById('close-socials').addEventListener('click', function(event) {
    event.preventDefault();
    const socialsSection = document.getElementById('socials');
    socialsSection.style.opacity = '0'; // Set opacity to 0 to trigger transition
    setTimeout(() => {
        socialsSection.style.display = 'none';
    }, 500); // Match the transition duration
});

document.querySelector('.art').addEventListener('click', function() {
    const artSection = document.getElementById('art');
    artSection.style.display = 'flex';
    setTimeout(() => {
        artSection.style.opacity = '1'; // Set opacity to 1 to trigger transition
    }, 10); // Slight delay to trigger the transition
});

document.getElementById('close-art').addEventListener('click', function(event) {
    event.preventDefault();
    const artSection = document.getElementById('art');
    artSection.style.opacity = '0'; // Set opacity to 0 to trigger transition
    setTimeout(() => {
        artSection.style.display = 'none';
    }, 500); // Match the transition duration
});

document.querySelector('.commissions').addEventListener('click', function() {
    const commissionsSection = document.getElementById('commissions');
    commissionsSection.style.display = 'block';
    setTimeout(() => {
        commissionsSection.style.opacity = '1'; // Set opacity to 1 to trigger transition
    }, 10); // Slight delay to trigger the transition
});

document.getElementById('close-commissions').addEventListener('click', function(event) {
    event.preventDefault();
    const commissionsSection = document.getElementById('commissions');
    commissionsSection.style.opacity = '0'; // Set opacity to 0 to trigger transition
    setTimeout(() => {
        commissionsSection.style.display = 'none';
    }, 500); // Match the transition duration
});

document.querySelector('.faq').addEventListener('click', function() {
    const faqSection = document.getElementById('faq');
    faqSection.style.display = 'block';
    setTimeout(() => {
        faqSection.style.opacity = '1'; // Set opacity to 1 to trigger transition
    }, 10); // Slight delay to trigger the transition
});

document.getElementById('close-faq').addEventListener('click', function(event) {
    event.preventDefault();
    const faqSection = document.getElementById('faq');
    faqSection.style.opacity = '0'; // Set opacity to 0 to trigger transition
    setTimeout(() => {
        faqSection.style.display = 'none';
    }, 500); // Match the transition duration
});

document.querySelector('.work').addEventListener('click', function(event) {
    event.preventDefault();
    const commissionsSection = document.getElementById('commissions');
    const artSection = document.getElementById('art');
    commissionsSection.style.opacity = '0'; // Set opacity to 0 to trigger transition
    setTimeout(() => {
        commissionsSection.style.display = 'none';
        artSection.style.display = 'flex';
        setTimeout(() => {
            artSection.style.opacity = '1'; // Set opacity to 1 to trigger transition
        }, 10); // Slight delay to trigger the transition
    }, 500); // Match the transition duration
});

document.querySelectorAll('#art img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.id = 'overlay';
        document.body.appendChild(overlay);

        const enlargedImg = document.createElement('img');
        enlargedImg.src = this.src;
        enlargedImg.id = 'enlarged-img';
        overlay.appendChild(enlargedImg);

        const artGallery = document.querySelector('.art-gallery');
        artGallery.style.display = 'flex';
        artGallery.style.alignItems = 'center';
        artGallery.style.justifyContent = 'center';

        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
            artGallery.style.display = ''; // Reset display property
        });
    });
});
