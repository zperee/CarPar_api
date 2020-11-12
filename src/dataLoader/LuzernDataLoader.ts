import Parking, {IParking} from "../models/Parking";

export async function loadLiveDataForLuzern() {
    let parkings = Parking.find().exec();

    const axios = require('axios');
    let liveData = await axios.get('https://plsl-4-parking-api.c7n.app/');


    Promise.all([liveData, parkings]).then((values: any) => {
        values[1].map((parking: IParking) => {
            parking.free = values[0].data.data[parking.apiId];
            parking.save().catch(error => console.log(error));
        })
    });
}
