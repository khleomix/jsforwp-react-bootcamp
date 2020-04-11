import React from "react";

const Practice1 = () => {
const id = 1;
const username = "jpalmes";

return (
    <div className="practice">
		<User id={id} username={username} />
    </div>
	);
};

const User = props => (
	<p>
		{props.username} [{props.id}]
	</p>
);

export default Practice1;
