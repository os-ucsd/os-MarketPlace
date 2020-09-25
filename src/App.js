import React, { useState, useEffect } from 'react';
import ProjectCard from "./components/ProjectCard"

function App() {
  const [projectList, setProjectList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=topic:os-ucsd-project', {
      headers: {
        'accept': 'application/vnd.github.mercy-preview+json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setProjectList(data.items)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [isLoading])

  return (
    <div className="">
      <div className="bg-blue-300 h-48 w-full pt-12"> <h1 className="font-serif tracking-wide text-center text-white text-5xl">OS MARKETPLACE</h1></div>
      <br></br>
      <br />
      <div className="container ml-48">
        {isLoading ? <h1 className="text-6xl text-center">Loading ...</h1>
          : <div className="grid grid-cols-3 gap-4">
            {projectList.map(project => (<ProjectCard key={project.id} content={project} />))}
          </div>}
      </div>

      <br />
      <div className="bg-blue-300 h-24 w-full pt-12"></div>
    </div>
  );
}

export default App;
