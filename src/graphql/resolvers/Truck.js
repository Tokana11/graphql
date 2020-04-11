import Truck from "../../models/Truck"
import { response } from "express"

export default {
    Query: {
        truck: (root, args) => {
            return new Promise((resolve, reject) => {
                Truck.findOne(args).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        trucks: () => {
            return new Promise((resolve, reject) => {
                Truck.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addTruck: (root, { registernumber, manufacturer, enginetype }) => {
            const newTruck = new Truck({registernumber, manufacturer, enginetype});
            return new Promise((resolve, reject) => {
                newTruck.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteTruck: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Truck.findByIdAndUpdate({ _id }, { $set: { registernumber, manufacturer, enginetype } }, { new: true }).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}