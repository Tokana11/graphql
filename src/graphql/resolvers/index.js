import {mergeResolvers} from "merge-graphql-schemas";
import Truck from "./Truck";
import Trailer from "./Trailer";
import Driver from "./Driver";

const resolvers = [Truck,Trailer,Driver];

export default mergeResolvers(resolvers);