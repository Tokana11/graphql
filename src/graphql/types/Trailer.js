export default `
    type Trailer {
        _id: String!
        registernumber: String!
        manufacturer: String!
        type: String
    }

    type Query {
        trailer(_id: String!):Trailer
        trailers:[Trailer]
    }

    type Mutation {
        addTrailer(registernumber:String!,manufacturer: String!, type: String!): Trailer
        deleteTrailer(_id: String!): Trailer
        }

`