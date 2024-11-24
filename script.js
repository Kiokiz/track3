document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk mengambil data GPS dan memperbarui tampilan
    function updateGpsData() {
      fetch('/gps-data')
        .then(response => response.json())
        .then(data => {
          document.getElementById('latitude').textContent = data.latitude;
          document.getElementById('longitude').textContent = data.longitude;
        })
        .catch(error => console.error('Error fetching GPS data:', error));
    }
  
    // Update data GPS setiap detik
    setInterval(updateGpsData, 1000);
  });
  