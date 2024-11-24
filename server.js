const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());  // Untuk mengurai JSON yang dikirim oleh ESP32

// Menyimpan data GPS dalam variabel
let gpsData = {
  latitude: 'Not available',
  longitude: 'Not available'
};

// Endpoint untuk menerima data GPS dari ESP32
app.post('/update-gps', (req, res) => {
  gpsData.latitude = req.body.latitude;
  gpsData.longitude = req.body.longitude;
  console.log('Received GPS data: ', gpsData);  // Log data yang diterima
  res.send('GPS data updated');
});

// Endpoint untuk mengirimkan data GPS ke frontend
app.get('/gps-data', (req, res) => {
  res.json(gpsData);  // Kirimkan data GPS dalam format JSON
});

// Mulai server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
