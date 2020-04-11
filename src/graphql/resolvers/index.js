import {mergeResolvers} from "merge-graphql-schemas";
import Truck from "./Truck";
import Trailer from "./Trailer";

const resolvers = [Truck,Trailer];

export default mergeResolvers(resolvers);