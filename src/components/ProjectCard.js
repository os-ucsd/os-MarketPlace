import React from 'react'

function ProjectCard(content) {
    return (
        <div className="w-64 rounded-lg overflow-hidden shadow-lg" style={{ height: "550px" }}>
            {console.log(content.content)}
            <img src={content.content.owner.avatar_url} alt="projectImage" />
            <div className="px-6 py-4">
                <div className="font-bold text-blue-500 text-xl mb-2">
                    {content.content.name}
                </div>
                <ul className="text-base">
                    <li><strong>Owner: </strong>{content.content.owner.login}</li>
                    <li><strong>Date Created: </strong>{Date(content.content.created_at).toString().substring(0, 15)}</li>
                    <li><strong>Description: </strong>{content.content.description} </li>
                </ul>
            </div>
            <div className="px-6 py-4 ">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer">
                    #{content.content.language}
                </span>
            </div>
        </div>
    )
}

export default ProjectCard