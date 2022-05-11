import React from 'react'

const Repo = ({repo}) =>{
    return(
        <>
        <div className="person">
            <a href={repo.html_url} className="github-card" rel="noreferrer" target="_blank" >
                <h3>{repo.name}</h3>
                <p>{repo.description ?repo.description: 'N/A' }</p>
                <span className="github-card__meta">
                <span className="github-card__language-icon">●</span> {repo.language}
                </span>
                <span className="github-card__meta">
                <i className="fa fa-star" aria-hidden="true"></i>
                {repo.stargazers_count}
                </span>
                <span className="github-card__meta">
                <i className="fa fa-code-fork" aria-hidden="true"></i>
                {repo.forks_count}
                </span>
                <span className="github-card__meta">
                <i className="fa fa-file" aria-hidden="true"></i>
                {repo.size}
                </span>
            </a>
        </div>
        </>
    )
}

export default Repo