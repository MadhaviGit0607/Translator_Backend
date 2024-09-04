const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000 // Port for your backend server

// Middleware
app.use(cors()) // Enable CORS
app.use(express.json()) // Parse JSON bodies

// Sample endpoint for language data
app.get('/api/languages', (req, res) => {
  const languages = {
    English: {
      home: 'Home',
      movies: 'Movies',
      tvShows: 'TV Shows',
      sports: 'Sports',
      live: 'Live',
    },
    French: {
      home: 'Accueil',
      movies: 'Films',
      tvShows: 'Émissions TV',
      sports: 'Sports',
      live: 'Direct',
    },
    German: {
      home: 'Startseite',
      movies: 'Filme',
      tvShows: 'TV-Sendungen',
      sports: 'Sport',
      live: 'Live',
    },
    Russian: {
      home: 'Главная',
      movies: 'Фильмы',
      tvShows: 'ТВ Шоу',
      sports: 'Спорт',
      live: 'Прямой эфир',
    },
    Spanish: {
      home: 'Inicio',
      movies: 'Películas',
      tvShows: 'Programas de TV',
      sports: 'Deportes',
      live: 'En vivo',
    },
    Chinese: {
      home: '主页',
      movies: '电影',
      tvShows: '电视节目',
      sports: '体育',
      live: '直播',
    },
  }

  res.json(languages)
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
