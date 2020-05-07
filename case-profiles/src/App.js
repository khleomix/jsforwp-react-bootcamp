import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import './App.css';

const GET_CASE_PROFILES =  gql`
{
	cases {
		confirmedCases(region: "Western Visayas") {
			dateReportConfirmed
			caseNumber
			age
			sex
			residence {
				region
				province
				city
			}
			healthStatus
			didHomeQuarantine
			admitted
			dateDeath
			dateRecovery
			removalType
			dateReportRemoved
		}
	}
}`

function App() {
	const { data, loading, error } = useQuery(GET_CASE_PROFILES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;

	console.log(data.cases.confirmedCases);
	return (
		<React.Fragment>
			<h1>Case Profiles</h1>

			<div className="container">
				{data &&
					data.cases.confirmedCases.map((profile, index) => {
						return (
							<div key={index} className="card">
								<div class="card-body">
									<p>WV# {index}</p>
									<p>Date Confirmed: {profile.dateReportConfirmed}</p>
									<p>Case Number: {profile.caseNumber}</p>
									<p>Gender: {profile.sex}</p>
									<p>Age: {profile.age}</p>
									<p>Health Status: {profile.healthStatus}</p>
									<p>City/Area: {profile.residence.city}</p>
									<p>Province: {profile.residence.province}</p>
									<p>Did Quarantine? {profile.didHomeQuarantine}</p>
									<p>Admitted? {profile.admitted}</p>
									<p>Date of Recovery: {profile.dateRecovery}</p>
									<p>Date of Death: {profile.dateDeath}</p>
									<p>Date Report Removed: {profile.dateReportRemoved}</p>
									<p>Removal Type: {profile.removalType}</p>
								</div>
							</div>
						)
					})
				}
			</div>
		</React.Fragment>
	);
}

export default App;
