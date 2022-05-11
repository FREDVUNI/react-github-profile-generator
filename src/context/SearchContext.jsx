import React,{createContext} from 'react'

export const SearchContext = createContext()

export const SearchProvider = (props) =>{
    return(
        <SearchContext.Provider value={'FREDVUNI'}>
            {props.children}
        </SearchContext.Provider>
    )
}
