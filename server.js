    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const app = express();
    const port = process.env.PORT || 3000;

    // Gunakan body-parser untuk menangani data POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Menyajikan file statis (seperti CSS dan JS) dari folder "public"
    app.use(express.static('public'));

    // Simpan data GPS dalam variabel
    let gpsData = {
    latitude: 'Not available',
    longitude: 'Not available'
    };

    // Endpoint untuk menerima data GPS dari ESP32
    app.post('/update-gps', (req, res) => {
        gpsData.latitude = req.body.latitude;
        gpsData.longitude = req.body.longitude;
        console.log('Received GPS data: ', gpsData);  // Log data GPS yang diterima
        res.send('GPS data updated');
      });
      
      // Endpoint untuk mengirimkan data GPS ke frontend
    app.get('/gps-data', (req, res) => {
    res.json(gpsData);  // Kirimkan data GPS dalam format JSON
    });
  
    // Halaman utama untuk menampilkan data GPS
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Menyajikan file HTML
    });

    // Start the server
    app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    });
