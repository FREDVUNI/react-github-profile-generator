import React,{createContext,useState,useEffect} from 'react'

export const SearchContext = createContext()
let searched = JSON.parse(localStorage.getItem("search"))

export const SearchProvider = (props) =>{
    let [search,setSearch] = useState([])

    const getSearch = () =>{
        if(searched === "" || searched === undefined) setSearch("FREDVUNI")
        if(searched !== "") search = setSearch(searched)
    }

    const updateSearch = (username) =>{
        setSearch(username)
    }
    
    useEffect(()=>{
        getSearch();
        // eslint-disable-next-line
    },[])

    return(
        <SearchContext.Provider value={{username:search,updateSearch}}>
            {props.children}
        </SearchContext.Provider>
    )
}
