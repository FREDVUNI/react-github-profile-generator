import React from 'react'
const Card = ({profile}) => {
    return (
        <>
        <section className="main">
            <img src={profile.avatar_url} alt="profile"/>
            <span>{profile.name}</span>
            <p><a href={`https://github.com/${profile.login}`} rel="noreferrer" target='_blank'>@{profile.login}</a></p>        
            <ul className="profile">  
                <li>{profile.followers} <strong>Followers</strong></li>  
                <li>{profile.following} <strong>Following</strong></li>  
                <li>{profile.public_repos} <strong>Repos</strong></li>  
            </ul>  
            <ul> 
                <li><span><i className="fas fa-location-dot"></i> {profile.location}</span></li>
                <li><span><i className="far fa-calendar"></i> {new Date(profile.created_at).toLocaleDateString()}</span></li>
            </ul>
        </section> 
        </>
    )
}

export default Card
