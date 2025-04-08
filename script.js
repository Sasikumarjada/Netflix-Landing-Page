// Form validation and content display
const emailForm = document.querySelector('.email-form');
const emailInput = emailForm.querySelector('input[type="email"]');
const emailButton = emailForm.querySelector('button');
const contentSection = document.getElementById('content');

emailButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateEmail(emailInput.value)) {
        // Show content section with animation
        contentSection.style.display = 'block';
        setTimeout(() => {
            contentSection.classList.add('visible');
            // Smooth scroll to content
            contentSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        emailInput.value = '';
    } else {
        // Shake animation for invalid input
        emailForm.style.animation = 'shake 0.5s';
        setTimeout(() => {
            emailForm.style.animation = '';
        }, 500);
    }
});

// Add keyframe animation for shake effect
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}`;
document.head.appendChild(style);


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Language selector functionality
const languageSelector = document.querySelector('.language-selector');
languageSelector.addEventListener('change', (e) => {
    // Fade out/in effect when changing language
    document.body.style.opacity = 0.5;
    setTimeout(() => {
        console.log(`Language changed to: ${e.target.value}`);
        document.body.style.opacity = 1;
    }, 300);
});


// Responsive menu for mobile
function setupMobileMenu() {
    if (window.innerWidth < 768) {
        // Add mobile menu functionality here
        console.log('Mobile menu setup');
    }
}

// Initialize all functionality
window.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
});

// Handle window resize
window.addEventListener('resize', () => {
    setupMobileMenu();
});

// Enhanced smooth scrolling with offset for header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Content item hover effects
document.querySelectorAll('.content-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.zIndex = '2';
        item.querySelector('.content-overlay').style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.zIndex = '1';
        item.querySelector('.content-overlay').style.opacity = '0';
    });
});
