// Monochrome Clock JavaScript
function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();
    
    // Calculate smooth hand movements
    const secondDegrees = (seconds + milliseconds / 1000) * 6;
    const minuteDegrees = (minutes + seconds / 60) * 6;
    const hourDegrees = ((hours % 12) + minutes / 60) * 30;
    
    // Apply rotations
    document.getElementById('second-hand').style.transform = 
        `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.getElementById('minute-hand').style.transform = 
        `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.getElementById('hour-hand').style.transform = 
        `translateX(-50%) rotate(${hourDegrees}deg)`;
    
    // Update digital clock
    const digitalClock = document.getElementById('digital-clock');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Update clock every 16ms for smooth animation (~60fps)
function startClock() {
    updateClock();
    setInterval(updateClock, 16);
}

// Start the clock when page loads
document.addEventListener('DOMContentLoaded', startClock);