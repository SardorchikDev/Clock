// Authentic Manga/Anime Style Digital Clock JavaScript
function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Format time segments
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    
    // Update digital clock display
    const hoursElement = document.querySelector('.time-segment.hours');
    const minutesElement = document.querySelector('.time-segment.minutes');
    const secondsElement = document.querySelector('.time-segment.seconds');
    
    if (hoursElement) {
        hoursElement.textContent = formattedHours;
        hoursElement.setAttribute('data-value', formattedHours);
    }
    if (minutesElement) {
        minutesElement.textContent = formattedMinutes;
        minutesElement.setAttribute('data-value', formattedMinutes);
    }
    if (secondsElement) {
        secondsElement.textContent = formattedSeconds;
        secondsElement.setAttribute('data-value', formattedSeconds);
    }
    
    // Update AM/PM indicator
    const ampmElement = document.getElementById('ampm-indicator');
    if (ampmElement) {
        ampmElement.textContent = hours >= 12 ? 'PM' : 'AM';
    }
    
    // Update date display
    updateDateDisplay(now);
    
    // Add active class to current time segment for extra glow
    updateActiveGlow();
}

function updateDateDisplay(date) {
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
    const dayNameElement = document.querySelector('.day-name');
    const dateNumberElement = document.querySelector('.date-number');
    const monthNameElement = document.querySelector('.month-name');
    
    if (dayNameElement) dayNameElement.textContent = days[date.getDay()];
    if (dateNumberElement) dateNumberElement.textContent = date.getDate().toString().padStart(2, '0');
    if (monthNameElement) monthNameElement.textContent = months[date.getMonth()];
}

function updateActiveGlow() {
    const timeSegments = document.querySelectorAll('.time-segment');
    const now = new Date();
    const seconds = now.getSeconds();
    
    // Add active class to seconds for pulsing effect
    timeSegments.forEach(segment => {
        segment.classList.remove('active');
    });
    
    const secondsElement = document.querySelector('.time-segment.seconds');
    if (secondsElement) {
        secondsElement.classList.add('active');
    }
}

// Add some interactivity - glow effect on hover
function addInteractivity() {
    const timeSegments = document.querySelectorAll('.time-segment');
    timeSegments.forEach(segment => {
        segment.addEventListener('mouseenter', () => {
            segment.classList.add('active');
        });
        segment.addEventListener('mouseleave', () => {
            segment.classList.remove('active');
        });
    });
    
    // Add sparkle effect on click
    document.addEventListener('click', (e) => {
        createSparkle(e.clientX, e.clientY);
    });
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✦';
    sparkle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        color: #fff;
        font-size: 20px;
        pointer-events: none;
        z-index: 1000;
        animation: sparkleClick 0.5s ease-out forwards;
        text-shadow: 0 0 10px #00ffff, 0 0 20px #0088ff;
    `;
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 500);
}

// Add click sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleClick {
        0% { transform: scale(1) rotate(0deg); opacity: 1; }
        100% { transform: scale(2) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Start the clock
function startClock() {
    updateClock();
    setInterval(updateClock, 1000); // Update every second
    
    // Add interactivity after DOM is ready
    setTimeout(addInteractivity, 100);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', startClock);