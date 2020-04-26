import React from "react";

const Header = () => {
	const headerText = "WordPress.org Blog";
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
