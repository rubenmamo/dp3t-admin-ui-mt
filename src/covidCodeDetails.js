import React, { Component } from 'react';
import './App.css';
import Error from './Error';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Moment from 'react-moment';
import 'moment-timezone';
import { withRouter } from "react-router";
import { authProvider } from './authProvider';
import BlockUi from 'react-block-ui';

class CovidCodeDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
			data: []
          };
    }

    componentDidMount() {
        this.loadCovidCode();
	}
	
    loadCovidCode = async () => {
		const { history } = this.props;
		const urlBase = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_BASE_URL : 'http://localhost:8080';
		const token = await authProvider.getIdToken();

		let url = urlBase + "/v1/codes/" + this.props.match.params.id;
		
        return fetch(url, {
            method: "GET",
            headers: {
				Authorization: 'Bearer ' + token.idToken.rawIdToken,
                "Content-Type": "application/json",
            }
		})
        .then(result => {
			if (!result.ok)	{
				if (result.status === 401) {
					history.push('/unauthorised');
				}
			}
			return result;
		})		
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
					data: result,
					error: null
                });
            },
            (error) => {
                this.setState({
					isLoaded: false,
					error
                });
            }
        )
    }	

	renderIssueLogs() {
		const { issueLogs } = this.state.data;
		if (issueLogs === undefined || issueLogs.length === 0) {
			return <tr><td colSpan={2}>No tokens have been issued yet</td></tr>
		} else {
			return issueLogs.map((log) => (
				<tr key={log.uuid}>
					<td>{log.uuid}</td>
					<td><Moment fromNow>{log.issuedAt}</Moment></td>
				</tr>
			));
	
		}
	}
	
	render() {
		const { error, isLoaded } = this.state;
		
        if (error) {
            return <Error message={error.message}/>;
        } else {
			return (
				<BlockUi tag="div" blocking={!isLoaded}>
					<h3 className="mt-3">CovidCode Registration</h3>				
					<Form className="mt-3">
						<Form.Group as={Row} controlId="specimenNumber">
							<Form.Label column sm="2">
								Specimen Number
							</Form.Label>
							<Col sm="10">
								<Form.Control plaintext placeholder="Specimen Number" defaultValue={ this.state.data.specimenNumber } />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="receiveDate">
							<Form.Label column sm="2">
								Receive Date
							</Form.Label>
							<Col sm="10">
								<Form.Control plaintext placeholder="Receive Date" defaultValue={ this.state.data.receiveDate } />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="onsetDate">
							<Form.Label column sm="2">
								Onset Date
							</Form.Label>
							<Col sm="10">
								<Form.Control plaintext placeholder="Onset Date" defaultValue={ this.state.data.onsetDate } />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="authorisationCode">
							<Form.Label column sm="2">
								Authorisation Code
							</Form.Label>
							<Col sm="10">
								<Form.Control plaintext placeholder="Authorisation Code" defaultValue={ this.state.data.authorisationCodePretty } />
							</Col>
						</Form.Group>
						<Form.Group as={Row} controlId="receiveDate">
							<Table responsive>
								<thead>
									<tr>
										<th>Token identifier</th>
										<th>Issued On</th>
									</tr>
								</thead>
								<tbody>
									{ this.renderIssueLogs() }
								</tbody>
							</Table>					
						</Form.Group>
						<Form.Group as={Row}>
						<Col>
							<Button variant="primary" onClick={e => this.props.history.push('/covid-codes')}>
								Back
							</Button>
						</Col>
					</Form.Group>
					</Form>
				</BlockUi>
			);
		}
	}

}

export default withRouter(CovidCodeDetails);

