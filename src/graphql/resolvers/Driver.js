import Driver from "../../models/Driver";

export default {
    Query: {
        driver: (root, args) => {
            return new Promise((resolve, reject) => {
                Driver.findOne(args).exec((error, response)=> {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        drivers: () => {
            return new Promise((resolve, reject) => {
                Driver.find({}).populate().exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    },
    Mutation: {
        addDriver: (root, {first_name, last_name, license_number}) => {
            const newDriver = new Driver ({first_name, last_name, license_number});
            return new Promise((resolve, reject) => {
                newDriver.save((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        },
        deleteDriver: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Driver.findByIdAndRemove({_id}).exec((error, response) => {
                    error ? reject(error): resolve(response);
                })
            })
        },
        editDriver: (root, {_id, first_name, last_name, license_number}) => {
            return new Promise((resolve, reject) => {
                Driver.findByIdAndUpdate({_id}, {$set: {first_name, last_name, license_number}}, {new: true}).exec((error, response) => {
                    error ? reject(error) : resolve(response);
                })
            })
        }
    }
}