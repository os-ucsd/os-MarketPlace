import React, { useState, useEffect } from 'react'

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
    const contributorList = contributors.length >= 2 ? contributors.map((e, index) => {
        if (index < 3) {
            return (
                <div key={e.id} className="inline">
                    {e.login},{" "}
                </div>
            )
        }
        else if (index === 3) {
            return (
                <div key={e.id} className="inline">
                    ...
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
        <div className="w-64 rounded-lg overflow-hidden shadow-lg" style={{ height: "570px" }} >
            {console.log(content.content)}
            <a href={content.content.html_url} cursor-pointer>
                <img src={content.content.owner.avatar_url} alt="projectImage" />
                <div className="px-6 py-4">
                    <div className="font-bold text-blue-500 text-xl mb-2">
                        {content.content.name}
                    </div>
                    <ul className="text-base">
                        <li><strong>Owner: </strong>{content.content.owner.login}</li>
                        <li><strong>Date Created: </strong>{Date(content.content.created_at).toString().substring(0, 15)}</li>
                        <li><strong>Description: </strong>{content.content.description} </li>
                        <li><strong>Contributors: </strong> {contributorList} </li>
                    </ul>
                </div>
                <div className="px-6 py-4 ">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer">
                        #{content.content.language}
                    </span>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard