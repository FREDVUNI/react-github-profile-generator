import React,{useState,useEffect} from 'react'
import SearchIcon from "../search.svg"
import Card from './Card'
import Loader from './Loader'

const Search = () =>{
    const [profile,setProfile] = useState({})
    const [user,setUser] = useState("")
    const [loading,setLoading] = useState(false)

    const searchValue = (e) =>{
        let inputValue = e.target.value
        setUser(inputValue)
        
        localStorage.setItem("search",JSON.stringify(inputValue))
    }

    const submitHandler = () =>{
        getProfile(user)
    }
    const API = 'https://api.github.com/users'

    const getProfile = (username) =>{
        fetch(`${API}/${username}`)
        .then((response)=>{ 
            // console.log(response.json())
            return response.json()
        })
        .then((data)=>{
            // console.log(data.bio)
            setProfile(data)
            setLoading(true)
        })
        .catch((error)=>{
            console.log(error.message || `something went wrong.`)
        })
    }
    useEffect(()=>{
        getProfile('FREDVUNI')
    },[])

    return (
        <>
        <div className="search">
            <input
                placeholder="who are you searching for ?"
                value={user}
                onChange={searchValue} 
                autoFocus  
            />
            <img src={SearchIcon} alt="search" onClick={submitHandler}/>
        </div>
        <div className="container">
            {
                // profile.id !== undefined  ? 
                //     loading && profile.id !== undefined ? <Card profile={profile} key={profile.id}/> : <Loader/>
                // :
                // <div className="empty">
                //     <h2>This username is invalid</h2>
                // </div>
                loading && profile.id !== undefined ? <Card profile={profile} key={profile.id}/> : <Loader/>
            }
        </div>
        </>
    )
}

export default Search