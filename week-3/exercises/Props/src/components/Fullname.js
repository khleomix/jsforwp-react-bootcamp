import React from "react";

/*
  6. Destructure the props needed
*/
const FullName = ({ firstName, lastName }) => (
	<h1>
		Full Name: {firstName} {lastName}
	</h1>
);

export default FullName;
