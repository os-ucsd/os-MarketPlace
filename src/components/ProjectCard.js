import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';
import ProjectTag from './ProjectTag'

function ProjectCard(content) {
    const [contributors, setContributor] = useState([])

    useEffect(() => {
        fetch(content.content.contributors_url)
            .then(res => res.json())
            .then(data => {
                setContributor(data)
            })
            .catch(err => console.log(err))
    }, [])

    // Handle mapping the contributor list     
    const contributorList = contributors.length > 1 ? contributors.map((e, index) => {
        if (index === contributors.length - 1) {
            return (
                <div key={e.id} className="inline">
                    {e.login}
                </div>
            )
        }
        else if (index < 3) {
            return (
                <div key={e.id} className="inline">
                    {e.login},{" "}
                </div>
            )
        }
        else if (index === 3) {
            return (
                <div key={e.id} className="inline">
                    ...{" "}
                </div>
            )
        }

    }) : contributors.map((e) => {
        return (
            <div key={e.id} className="inline">
                {e.login}
            </div>
        )
    })

    return (
        <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: "700px" }} >
            <a href={content.content.html_url} cursor-pointer>
                <img src={content.content.owner.avatar_url} alt="projectImage" style={{ width: "500px" }} />
                <div className="px-6 py-4">
                    <div className="font-bold text-blue-500 text-xl mb-2">
                        {content.content.name}
                    </div>
                    <ul className="text-base">
                        <li><strong>Owner: </strong>{content.content.owner.login}</li>
                        <li><strong>Date Created: </strong><Moment date={content.content.created_at} /></li>
                        <li><strong>Description: </strong>{content.content.description} </li>
                        <li><strong>Contributors: </strong> {contributorList} </li>
                    </ul>
                </div>
                <ProjectTag tagList={content.content.url} />
            </a>
        </div>
    )
}

export default ProjectCard