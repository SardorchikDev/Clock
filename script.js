// Manga Style Digital Clock JavaScript
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
    
    if (hoursElement) hoursElement.textContent = formattedHours;
    if (minutesElement) minutesElement.textContent = formattedMinutes;
    if (secondsElement) secondsElement.textContent = formattedSeconds;
    
    // Update AM/PM indicator
    const ampmElement = document.getElementById('ampm-indicator');
    if (ampmElement) {
        ampmElement.textContent = hours >= 12 ? 'PM' : 'AM';
    }
    
    // Update date display
    updateDateDisplay(now);
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
}

// Start the clock
function startClock() {
    updateClock();
    setInterval(updateClock, 1000); // Update every second
    
    // Add interactivity after DOM is ready
    setTimeout(addInteractivity, 100);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', startClock);