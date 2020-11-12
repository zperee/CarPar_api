import { Document, Model, model, Schema } from "mongoose";
import * as mongoose from "mongoose";

export interface IParking extends Document {
    name: string;
    free: number;
    city: string;
    apiId: string;
}

const parkingSchema: Schema = new Schema({
    name: String,
    apiId: String,
    free: Number,
    city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    },
}, {timestamps: { updatedAt: 'updatedAt' }});

const Parking: Model<IParking> = model("Parking", parkingSchema, "parkings");

export default Parking;
