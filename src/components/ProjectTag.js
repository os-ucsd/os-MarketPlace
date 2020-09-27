import React, { useState, useEffect } from 'react'


function ProjectTag(tagList) {
    const [tags, setTags] = useState([])

    useEffect(() => {
        fetch(tagList.tagList + "/languages")
            .then(res => res.json())
            .then(data => {
                const listTag = Object.keys(Object(data))
                setTags(listTag)
            })
            .catch(err => console.log(err))
    }, [tagList.tagList])

    return (
        <div className="px-6 py-4 ">
            {tags.map((tag, i) => {
                return (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 cursor-pointer">
                        #{tag}
                    </span>
                )
            })}

        </div>
    );
}

export default ProjectTag