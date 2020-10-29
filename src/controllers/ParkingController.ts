import Parking from "../models/Parking";

class ParkingController {

    async loadParkingForCity(id: string) {
        return Parking.find();
    }
}

export = new ParkingController();
