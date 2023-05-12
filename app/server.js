import express from 'express';
import CityController from './controllers/cityController.js';
import AuthController from './controllers/authController.js';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('views engine', 'ejs');
app.set('views', './app/views');

app.get('/', CityController.getCityController);
app.get('/auth', AuthController.authentWhithGithub);
app.post('/search-city', CityController.searchCity);

app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
})