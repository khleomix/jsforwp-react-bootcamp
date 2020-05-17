import React, { useState } from 'react';
import { useFetch } from "./hooks";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import '../App.scss';

function MoreInfo() {
	const [show, setShow] = useState(false);

	if (show) {
		return (
			<Alert variant="danger" onClose={() => setShow(false)} dismissible>
				<Alert.Heading>
					Additional Info
				</Alert.Heading>
				<p>
					Additional Info Here.
				</p>
			</Alert>
		);
	}
	return (
		<Button variant="info" onClick={() => setShow(true)} className="d-flex justify-content-center">
			Show More Info
		</Button>
	);
}

function ProfileCard() {
	const [data, loading] = useFetch(
		"https://wvctx.com/wp-json/wp/v2/profiles?per_page=100"
	);
	return (
		<>
			{loading ? (
				<div class="d-flex justify-content-center">
					<div class="spinner-grow text-info" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			) : (
					<div className="d-flex flex-wrap justify-content-between my-5">
						{data.map(({ id, acf }) => (
							<Card key={id} className={`my-5 col-12 col-md-6 col-lg-4 border border-secondary rounded ${acf.healthStatus.value}`}>
								<div class="card-image bg-light rounded-circle mt-n5 align-self-center border border-dark">
									<img src="https://wvctx.com/wp-content/themes/wvctx/assets/images/svg-icons/male.svg" className="img-thumbnail bg-transparent rounded-circle" alt="..." />
								</div>
								<div className="card-body">
									<h1 className="h3 mb-3 text-center">WV#{acf.patient_number}
										{'dead' === acf.healthStatus.value ? <sup>&#10013;</sup> : ''}
									</h1>
									<ul>
										<li><span>Age: </span><span className="font-weight-bold">{acf.age}</span></li>
										<li><span>Sex: </span><span className="font-weight-bold">{acf.sex.label}</span></li>
										<li><span>Health Status: </span><span className="font-weight-bold">{acf.healthStatus.label}</span></li>
										{acf.city ?
											<li><span>Location: </span><span className="font-weight-bold">{acf.city}, {acf.residence.label}</span></li>
										:
											<li><span>Location: </span><span className="font-weight-bold">{acf.residence.label}</span></li>
										}
										{acf.travel_history.length > 0 &&
											<li><span>Travel History: </span><span className="font-weight-bold">{acf.travel_history}</span></li>
										}
										{acf.exposure_details.length > 0 &&
											<li><span>Exposure History: </span><span className="font-weight-bold">{acf.exposure_details}</span></li>
										}
										{acf.quarantine_status.length > 0 &&
											<li><span>Quarantine Status: </span><span className="font-weight-bold">{acf.quarantine_status}</span></li>
										}
										{acf.hospital.length > 0 &&
											<li><span>Hospital: </span><span className="font-weight-bold">{acf.hospital}</span></li>
										}
										{acf.dateReportConfirmed.length > 0 &&
											<li><span>Date Confirmed: </span><span className="font-weight-bold">{acf.dateReportConfirmed}</span></li>
										}
										{acf.dateRecovery.length > 0 &&
											<li><span>Date Recovered: </span><span className="font-weight-bold">{acf.dateRecovery}</span></li>
										}
										{acf.dateDeath.length > 0 &&
											<li><span>Date of Death: </span><span className="font-weight-bold">{acf.dateDeath}</span></li>
										}
									</ul>
									<div className="d-flex justify-content-center">
										<MoreInfo />
									</div>
								</div>
							</Card>
						))}
					</div>
				)}
		</>
	);
}

export default ProfileCard;
