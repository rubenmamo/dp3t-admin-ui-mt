import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Unauthorised extends Component {

  render() {
    return (
		<React.Fragment>
			<Jumbotron className="mt-2">
		<Row>
			<Col xs="4" className="ml-5">
				<Image src="undraw_access_denied_6w73.svg" fluid />
			</Col>
			<Col xs="1"></Col>
			<Col xs="auto">
				<h1>tsk tsk</h1>
				<p>You are not authorised to perform this operation.</p>
			</Col>
		</Row>
		</Jumbotron>
		</React.Fragment>
	);
  }
}

export default Unauthorised;
