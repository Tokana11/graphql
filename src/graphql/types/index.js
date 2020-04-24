import {mergeTypes} from "merge-graphql-schemas";
import Truck from "./Truck";
import Trailer from "./Trailer";
import Driver from "./Driver";


const typeDefs = [Truck, Trailer,Driver];

export default mergeTypes(typeDefs, {all:true});