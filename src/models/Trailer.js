import mongoose from "mongoose"

const Schema = mongoose.Schema;

const TrailerSchema = new Schema({
    registernumber: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Trailer = mongoose.model("Trailer", TrailerSchema);

export default Trailer;