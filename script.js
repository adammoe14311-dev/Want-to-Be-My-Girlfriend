function moveNoButton() {
    const noBtn = document.querySelector('.no-btn');
    
    // Calculate random position boundaries within the browser window
    const maxWidth = window.innerWidth - noBtn.offsetWidth;
    const maxHeight = window.innerHeight - noBtn.offsetHeight;
    
    // Generate random coordinates
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    
    // Break away instantly to the random spot
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function selectYes() {
    // This explicitly updates the message to your new phrase
    document.getElementById('question').innerHTML = "See you tomorrow cutie 🥰❤️";
    document.getElementById('gif').src = "https://giphy.com";
    
    // Hide the action buttons
    document.querySelector('.btn-group').style.display = 'none';
}