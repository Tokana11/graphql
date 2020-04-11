export default `

    type Truck {
    _id: String!
    registernumber: String!
    manufacturer: String!
    enginetype: String!
    }

    type Query{
    truck(_id: String!): Truck
    trucks: [Truck]
    }

    type Mutation {
    addTruck(registernumber: String!, manufacturer: String!, enginetype: String!): Truck
    deleteTruck(_id: String!): Truck
    }

`

