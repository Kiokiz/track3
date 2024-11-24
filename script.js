document.addEventListener('DOMContentLoaded', () => {
    function updateGpsData() {
      // Mengambil data GPS dari server Vercel
      fetch('https://track3.vercel.app/gps-data')
        .then(response => response.json())  // Mengurai data dalam format JSON
        .then(data => {
          console.log(data);  // Debugging, lihat data di konsol
          // Memperbarui elemen HTML dengan data GPS
          document.getElementById('latitude').textContent = data.latitude;
          document.getElementById('longitude').textContent = data.longitude;
        })
        .catch(error => console.error('Error fetching GPS data:', error));
    }
  
    // Update data GPS setiap detik
    setInterval(updateGpsData, 1000);
  });
  