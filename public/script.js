document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
  
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  
    if (cookiesAccepted) {
      cookieBanner.style.display = 'none';
    }
  
    // Event listener for accepting cookies
    acceptCookiesBtn.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
  });