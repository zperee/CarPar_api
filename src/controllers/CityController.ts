import City from "../models/City";

class CityController {

  async defaultMethod() {
   return this.loadAllCities()
  }

  async loadAllCities() {
    return City.find()
  }

  async loadSpecificCity(id: String) {
    return City.findById(id);
  }

}

export = new CityController();
