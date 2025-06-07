// Hello World JavaScript - Your first interactive code!

// Wait for the webpage to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the button and surprise message elements
    const surpriseButton = document.getElementById('surprise-btn');
    const surpriseMessage = document.getElementById('surprise-message');
    
    // Keep track of whether the surprise has been shown
    let surpriseShown = false;
    
    // Add a click event listener to the button
    surpriseButton.addEventListener('click', function() {
        
        if (!surpriseShown) {
            // Show the surprise message
            surpriseMessage.classList.remove('hidden');
            
            // Change the button text
            surpriseButton.textContent = 'That was awesome! Click for another surprise! 🎈';
            
            // Mark that we've shown the first surprise
            surpriseShown = true;
            
            // Add a fun bouncing animation
            surpriseMessage.style.animation = 'bounce 0.6s ease-in-out';
            
        } else {
            // Second click - show a different message
            surpriseMessage.innerHTML = `
                <h2>🚀 Double Surprise!</h2>
                <p>You clicked again! This shows how JavaScript can respond to user interactions.</p>
                <p class="encouragement">You're getting the hang of this! Try looking at the code in script.js to see how this works. 🔍</p>
            `;
            
            // Change button text again
            surpriseButton.textContent = 'You found all the surprises! ⭐';
            
            // Change the button color to show it's "complete"
            surpriseButton.style.background = '#10b981';
            surpriseButton.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
            
            // Disable further clicks
            surpriseButton.disabled = true;
            surpriseButton.style.cursor = 'not-allowed';
        }
    });
    
    // Add a fun hover effect to the title
    const title = document.querySelector('.hello-title');
    
    title.addEventListener('mouseenter', function() {
        title.style.transform = 'scale(1.05)';
        title.style.transition = 'transform 0.3s ease';
    });
    
    title.addEventListener('mouseleave', function() {
        title.style.transform = 'scale(1)';
    });
    
    // Add a welcome message to the console (check browser developer tools!)
    console.log('🎉 Welcome to your first website!');
    console.log('💡 Tip: You can see this message by opening Developer Tools (F12) and looking at the Console tab');
    console.log('🚀 Try editing the code in script.js to make your own changes!');
});

// Fun fact: This is a comment! Comments help explain what code does.
// Try adding your own comments to remember what different parts do. 