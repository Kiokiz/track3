const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Gunakan body-parser untuk menangani data POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Simpan data GPS dalam variabel
let gpsData = {
  latitude: 'Not available',
  longitude: 'Not available'
};

// Endpoint untuk menerima data GPS dari ESP32
app.post('/update-gps', (req, res) => {
  gpsData.latitude = req.body.latitude;
  gpsData.longitude = req.body.longitude;
  console.log('Received GPS data: ', gpsData);
  res.send('GPS data updated');
});

// Halaman utama untuk menampilkan data GPS
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Real-Time GPS</title>
      </head>
      <body>
        <h1>Real-Time GPS Location</h1>
        <p><strong>Latitude:</strong> ${gpsData.latitude}</p>
        <p><strong>Longitude:</strong> ${gpsData.longitude}</p>
        <script>
          setInterval(() => {
            fetch('/')
              .then(response => response.text())
              .then(data => {
                document.body.innerHTML = data;
              });
          }, 1000);
        </script>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
