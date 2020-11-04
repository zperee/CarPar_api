import City from "../models/City";

class CityController {

  async defaultMethod() {
   return this.loadAllCities()
  }

  async loadAllCities() {
    return City.find()
  }

  async loadParkingForCity(id: string) {
    return City.findById(id).populate("parkings");
  }

}

export = new CityController();
