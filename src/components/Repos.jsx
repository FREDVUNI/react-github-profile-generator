import React,{useContext,useEffect,useState} from 'react'
import '../App.css'
import {SearchContext} from '../context/SearchContext'
import Repo from './Repo'
import Loader from './Loader'

const Repos = () =>{
    const username = useContext(SearchContext)
    const [repos,setRepos] = useState([])
    const [loading,setLoading] = useState(false)

    const getRepos = () =>{
        fetch(`https://api.github.com/users/${username}/repos`)
        .then((response)=> response.json())
        .then((data)=>{
            console.log(data)
            setLoading(true)
            return setRepos(data)
        })
        .catch((error)=>{
            console.log(error.message || `something went wrong.`)
        })
    }
    useEffect(()=>{
        getRepos()
    })

    return(
        <>
        <div className="container">
            { loading ? 
                    repos?.length > 0  ? 
                    repos.map((repo)=>(
                        <Repo repo={repo} key={repo.id}/> 
                    ))
                    :
                    <div className="empty">
                        <h2>This user has no repos available.</h2>
                    </div>
                    : <Loader/>
            }
        </div>
        </>
    )
}

export default Repos