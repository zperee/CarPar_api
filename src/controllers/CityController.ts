import City from "../models/City";
import Parking from "../models/Parking";

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
          maxDistance: 10000,
          includeLocs: "dist.location",
          spherical: true,
          key: "location"
        }
      }
    ]).limit(1)
    return City.populate(res, {path: "parkings"});
  }

  async loadParkingForAddress(q: any) {
    const axios = require('axios');

    let result = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(q)}region=ch&key=${process.env.GOOGLE_MAP_KEY}`)

    if (await result.data.status === "OK") {
      const lat = await result.data.results[0].geometry.location.lat
      const lon = await result.data.results[0].geometry.location.lng

      if (lat && lon) {
        const res = await Parking.aggregate([
          {
            $geoNear: {
              near: {type: "Point", coordinates: [lat, lon]},
              distanceField: "dist.calculated",
              maxDistance: 500,
              includeLocs: "dist.location",
              spherical: true,
              key: "location"
            }
          }
        ]).limit(10)
        return {parkings: res, _id: "Search", name: "Suche", location: {coordinates: [lat, lon]}};
      }
    }
    return undefined;
  }
}

export = new CityController();
