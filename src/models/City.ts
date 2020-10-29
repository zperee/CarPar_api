import { Document, Model, model, Schema } from "mongoose";

export interface ICity extends Document {
    name: string;
}

const citySchema: Schema = new Schema({
    name: String
});

const City: Model<ICity> = model("cities", citySchema);

export default City;
