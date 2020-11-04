import Parking from "../models/Parking";
import {AxiosResponse} from "axios";

class ParkingController {
    async loadParkingById(id: string) {
        return await Parking.findById(id).lean().then(async parking =>  {
            if (parking && parking.city == "5f997d496f014fa38c79c083") {
                parking.free = await loadLiveDataForLuzern(parking.apiId);
                return parking;
            } else {
                throw new Error("Methode for city to load live data not implemented.")
            }
        }).catch(err => {
            console.error(err)
            throw new Error("Something went wrong loading the parking data.")
        });
    }
}

async function loadLiveDataForLuzern(id: string) {
    const axios = require('axios');
    return await axios.get('https://plsl-4-parking-api.c7n.app/').then(function (response: AxiosResponse) {
        return response.data.data[id]
    }).catch((error: any) => console.error(error)) // Do not pass exception to user. field is just undefined
}

export = new ParkingController();
