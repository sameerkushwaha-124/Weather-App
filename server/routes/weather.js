const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/', async (req, res) => {
  const city = req.query.city;

  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const API_KEY = "12810f08db182690bd5b7a8d4bde87db";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const { temp, humidity } = response.data.main;
    const { speed } = response.data.wind;
    const { description, icon } = response.data.weather[0];
    const cityName = response.data.name;

    res.json({
      temperature: temp,
      humidity,
      windSpeed: speed,
      description,
      icon,
      city: cityName,
    });

  } catch (err) {
    res.status(404).json({ error: 'City not found' });
  }
});

module.exports = router;

module.exports = router;
