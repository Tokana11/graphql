export default `
    type Driver {
        _id: String!
        first_name: String!
        last_name: String!
        license_number: String!

    }

    type Query {
        driver(_id: String!): Driver
        drivers: [Driver]

    }

    type Mutation{
        addDriver( first_name: String!, last_name: String!, license_number: String!): Driver
        editDriver(first_name: String!, last_name: String!, license_number: String!): Driver
        deleteDriver(_id: String!): Driver
    }

`
    
