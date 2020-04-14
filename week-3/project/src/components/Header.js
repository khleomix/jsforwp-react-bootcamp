import React from "react";

const Header = () => {
	const headerText = "Heavy is the head that wears the crown";
	return (
		<header id="main">
			<Heading text={headerText} />
		</header>
	);
};

const Heading = (props) => {
	return <h1>{props.text}</h1>;
};

export default Header;
