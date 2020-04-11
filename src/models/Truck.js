import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TruckSchema = new Schema({
    registernumber: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    enginetype: {
        type: String,
        required: true
    }
})

const Truck = mongoose.model("Truck", TruckSchema);

export default Truck;