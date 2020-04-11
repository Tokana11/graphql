import Truck from "../../models/Trailer"
import { response } from "express"

export default {
    Query: {
        truck: (root, args) => {
            return new Promise((resolve, reject) => {
                Trailer.findOne(args).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        trucks: () => {
            return new Promise((resolve, reject) => {
                Trailer.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addTrailer: (root, {registernumer, manufacturer, type}) =>{
            const newTruck = new Truck ({registernumer,manufacturer,type});
            return new Promise((resolve, reject) => {
                newTruck.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteTrailer: (root,{_id}) => {
            return new Promise((resolve, reject) => {
                Truck.findByIdAndUpdate({_id}, {$set: {registernumer, manufacturer, type}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }

    }
}