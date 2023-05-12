import CityModel from '../models/CityModel.js';

class CityController {
  async searchCity(req, res) {
    const cityInfos = await CityModel.searchCity(req.body.city);
    res.redirect('/');
  }
  async getCityController(req, res) {
    const cityInfos = await CityModel.getCity();
    res.render('index.ejs', { data: cityInfos });
  }
}
    
module.exports = new CityController();