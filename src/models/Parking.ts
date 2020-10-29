import { Document, Model, model, Schema } from "mongoose";

export interface IParking extends Document {
    name: string;
}

const parkingSchema: Schema = new Schema({
    name: String
});

const Parking: Model<IParking> = model("parkings", parkingSchema);

export default Parking;
