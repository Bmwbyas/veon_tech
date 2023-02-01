import React, {memo, useCallback} from 'react';
import {CasesNav} from "../casesNav/CasesNav";
import {CasesContent} from "../casesContent/CasesContent";
import {CasesDataType} from "../casesContent/data";


export const Content = memo(() => {

    const [filter, setFilter] = React.useState<CasesDataType>('market')

    const onChangeFilter =useCallback( (value: CasesDataType) => {
        setFilter(value)
        console.log(value,'value')
    },[])






    return (
        <>
            <CasesNav filter={filter} onChangeFilter={onChangeFilter}  />
            <CasesContent filter={filter}/>
        </>
    );
});

