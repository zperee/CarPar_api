import Parking from "../models/Parking";
import {AxiosResponse} from "axios";

class ParkingController {
    async loadParkingById(id: string) {
        return Parking.findById(id);
        /*return await Parking.findById(id).lean().then(async parking =>  {
            if (parking && parking.city == "5f997d496f014fa38c79c083") {
                parking.free = await loadLiveDataForLuzern(parking.apiId);
                return parking;
            } else {
                throw new Error("Methode for city to load live data not implemented.")
            }
        }).catch(err => {
            console.error(err)
            throw new Error("Something went wrong loading the parking data.")
        });*/
    }
}

export = new ParkingController();
