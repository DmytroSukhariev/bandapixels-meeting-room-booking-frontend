import {useContext} from "react";
import {DataContext} from "./index";
import {DataContextType} from "./useData";

export const useGetContext = ()=>{
    return useContext(DataContext) as DataContextType ;
}
