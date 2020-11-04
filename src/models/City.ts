import { Document, Model, model, Schema } from "mongoose";
import * as mongoose from "mongoose";

export interface ICity extends Document {
    name: string;
}

const citySchema: Schema = new Schema({
    name: String,
    parkings:   [{
        type:   mongoose.Schema.Types.ObjectId,
        ref:   'Parking',
    }]
});

const City: Model<ICity> = model("City", citySchema, "cities");

export default City;
