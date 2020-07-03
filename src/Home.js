import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Home extends Component {

  render() {
    return (
		<Jumbotron className="mt-2">
		<Row>
			<Col xs="5" className="ml-5">
				<Image src="undraw_doctors_hwty.svg" fluid />
			</Col>
			<Col xs="auto">
				<h1>Covid Alert Malta Management</h1>
				<p>Please use the navigation bar above to access the desired functionality</p>
			</Col>
		</Row>
		</Jumbotron>
	);
  }
}

export default Home;
