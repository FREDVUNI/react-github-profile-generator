import React,{createContext} from 'react'

export const SearchContext = createContext()
let searched = JSON.parse(localStorage.getItem("search"))
let search

if(searched === "" || searched === undefined) search = "FREDVUNI"
if(searched !== "") search = searched

export const SearchProvider = (props) =>{
    return(
        <SearchContext.Provider value={search}>
            {props.children}
        </SearchContext.Provider>
    )
}
