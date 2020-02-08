import {Card, Button} from "react-bootstrap";
import "../css/projects.css"
import React from "react";
import axios from "axios"

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

    render(){
		return(
			<div>
			
			<div className="projects">
 				<Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={Object(Object(this.state.projects[0]).user).avatar_url}/>
    <Card.Body>
        <Card.Title>{Object(this.state.projects[0]).title}</Card.Title>
        <Card.Text>{Object(this.state.projects[0]).body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
</Card>
			</div>

			</div>
		)
	}
}

export default Project;
