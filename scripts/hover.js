document.getElementById('bottom-left-button').addEventListener('mouseover', function() {
    const popup = document.createElement('div');
    popup.id = 'light-mode-popup';
    popup.textContent = 'Light Mode';
    popup.style.position = 'fixed';
    popup.style.bottom = '60px';
    popup.style.left = '20px';
    popup.style.backgroundColor = '#cbf3f0';
    popup.style.color = '#161a1d';
    popup.style.padding = '10px';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    document.body.appendChild(popup);
});

document.getElementById('bottom-left-button').addEventListener('mouseout', function() {
    const popup = document.getElementById('light-mode-popup');
    if (popup) {
        document.body.removeChild(popup);
    }
});

document.getElementById('bottom-left-button').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

