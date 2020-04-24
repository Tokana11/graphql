import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DriverSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    license_number:{
        type: String,
        required: true
    }
})

const Driver = mongoose.model("Driver",DriverSchema);

export default Driver;