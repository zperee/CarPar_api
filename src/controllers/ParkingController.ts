import Parking from "../models/Parking";

class ParkingController {
    async loadParkingById(id: string) {
        return Parking.findById(id);
    }
}

export = new ParkingController();
