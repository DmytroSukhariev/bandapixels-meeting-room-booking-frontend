import React, {FC} from 'react';
import {useData} from "./useData";
import {DataContextType} from "./useData"

export const DataContext = React.createContext<DataContextType | undefined>(undefined);

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export const DataContextLayout: FC<Props> = ({children}) => {
    const data = useData()
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

