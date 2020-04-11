import React from "react";

import User from "./components/User";

const Practice5 = () => {
	const user = {
		id: 1,
		username: "jpalmes",
		firstName: "JC",
		lastName: "Palmes",
		preferredName: "JC",
		url: "https://khleomix.com",
		twitter: "jpalmes"
	};
	return (
		<div className="practice">
			{/*
			1. Spread the "user" object into User so each "user" property becomes it's own prop
			*/}
			<User {...user} />
		</div>
	);
};

export default Practice5;
