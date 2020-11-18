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

  async loadParkingForNearestCity(lat: any, lon: any) {
    const res = await City.aggregate([
      {
        $geoNear: {
          near: { type: "Point", coordinates: [ lat , lon ] },
          distanceField: "dist.calculated",
          maxDistance: 100,
          includeLocs: "dist.location",
          spherical: true,
          key: "location"
        }
      }
    ]).limit(1)
    return City.populate(res, {path: "parkings"});
  }
}

export = new CityController();
