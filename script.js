document.addEventListener('DOMContentLoaded', () => {
    // Fungsi untuk memperbarui data GPS di halaman
    function updateGpsData() {
      // Mengambil data GPS terbaru dari server
      fetch('/gps-data')
        .then(response => response.json())  // Mengambil data dalam format JSON
        .then(data => {
          // Memperbarui elemen HTML dengan data GPS
          document.getElementById('latitude').textContent = data.latitude;
          document.getElementById('longitude').textContent = data.longitude;
        })
        .catch(error => console.error('Error fetching GPS data:', error));
    }
  
    // Update data GPS setiap 1 detik
    setInterval(updateGpsData, 1000);
  });
  