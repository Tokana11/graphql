import {mergeTypes} from "merge-graphql-schemas";
import Truck from "./Truck";
import Trailer from "./Trailer";

const typeDefs = [Truck, Trailer];

export default mergeTypes(typeDefs, {all:true});