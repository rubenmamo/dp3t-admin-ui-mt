import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class ExposureConfig extends Component {

  render() {
    return (
		<React.Fragment>
		<h3 className="mt-3">Exposure Configuration</h3>
		<Form className="mt-3">
			<Form.Group>
				<Form.Label><h4>Transmission Risk</h4></Form.Label>
				<Form.Row>
					<Col>
						<Form.Label>Unused</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Confirmed test - Low transmission risk level</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Confirmed test - Standard transmission risk level</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Confirmed test - High transmission risk level</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Confirmed clinical diagnosis</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Self report</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Negative case</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Recursive case</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
					<Col>
						<Form.Label>Unused/custom</Form.Label>
						<Form.Control placeholder="0-8" />
					</Col>
				</Form.Row>
			</Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</React.Fragment>
	);
  }
}

export default ExposureConfig;
