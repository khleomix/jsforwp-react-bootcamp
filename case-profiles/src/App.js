import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ProfileCard from './components/ProfileCard';

class App extends Component {
	render() {
		return (
			<Container className="p-3">
				<h1 className="display-4 text-center">Western Visayas Case Profiles</h1>
					<ProfileCard />
			</Container>
		);
	}
}

export default App;
