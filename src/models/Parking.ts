import { Document, Model, model, Schema } from "mongoose";
import * as mongoose from "mongoose";

export interface IParking extends Document {
    name: string;
    free: number | undefined;
    city: string;
}

const parkingSchema: Schema = new Schema({
    name: String,
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }
});

const Parking: Model<IParking> = model("Parking", parkingSchema, "parkings");

export default Parking;
