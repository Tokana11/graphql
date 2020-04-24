import Truck from "../../models/Truck"
 import { response } from "express"

export default {
    Query: {
        truck:(root, args) => {
            return new Promise((resolve, reject) => {
                Truck.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        trucks: () => {
            console.log("asdsad");
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
                    console.log(response,error);
                })
            })
        },
        deleteTruck: (root, { _id }) => {
            console.log(_id);
            return new Promise((resolve, reject) => {
                Truck.findByIdAndRemove({ _id }).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                    console.log(response,error);
                })
            })
        }
    }
}