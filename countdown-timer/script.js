document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('datetime');
    const countdownElement = document.getElementById('countdown');
  
    function calculateTimeRemaining() {
      const targetDate = new Date(input.value);
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        return 'Countdown expired';
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
  
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  
    function updateCountdown() {
      const timeRemaining = calculateTimeRemaining();
      countdownElement.textContent = timeRemaining;
    }
  
    function startCountdown() {
      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  
    input.addEventListener('change', startCountdown);
  });
  