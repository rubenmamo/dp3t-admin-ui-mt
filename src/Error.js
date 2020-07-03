import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Error extends Component {

  render() {
    return (
		<React.Fragment>
			<Jumbotron className="mt-2">
		<Row>
			<Col xs="5" className="ml-5">
				<Image src="undraw_cancel_u1it.svg" fluid />
			</Col>
			<Col xs="1"></Col>
			<Col xs="auto">
				<h1>We have a situation.</h1>
				<p>Something went wrong during the last operation.</p>
				<p>This message could help:</p>
				<p><strong>{this.props.message}</strong></p>
			</Col>
		</Row>
		</Jumbotron>
		</React.Fragment>
	);
  }
}

export default Error;
