import {Card, Button} from "react-bootstrap";
import "../css/projects.css"
import React from "react";
import axios from "axios"

const EachProject = props => {
  	return(
<Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={props.project.user.avatar_url} />
    <Card.Body>
        <Card.Title>{props.project.title}</Card.Title>
        <Card.Text>{props.project.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
	);
};

class Project extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

componentDidMount() {
	axios
      // Get the data
      .get(
        "https://api.github.com/repos/os-ucsd/os-ucsd.ucsd.edu/issues?state=closed"
      )
      // Save it in projects
      .then(res => {
        this.setState({ projects: res.data});
      })
      // If there is any error, print it out
      .catch(err => console.log(err));
}

    showProject(projects) {
    	return projects.map(project => {
      	return <EachProject project={project} key={project.id} />;
   	 });
    }

    render() {
    return (
      <div>
        <h1>OS MARKETPLACE</h1>
        <div className="projects">{this.showProject(this.state.projects)}</div>
        <div className="button">
          <Button variant="primary" href="/form">Share Project</Button>
        </div>
      </div>
    );
  }
}

export default Project;
