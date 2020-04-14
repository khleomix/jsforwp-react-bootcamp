import React from "react";

const Footer = () => {
	const user = {
		firstName: "JC",
		lastName: "Palmes",
		preferredName: "JC",
		url: "https://khleomix.com",
	};
	const footerText =
		"We're all stories in the end. Just make it a good one, eh?";
	return (
		<footer className="footer">
			<FooterText text={footerText} />
			<SiteInfo {...user} />
		</footer>
	);
};

const FooterText = (props) => <p>{props.text}</p>;

const SiteInfo = ({ firstName, lastName, url }) => (
	<small>
		<a href={url}>
			{firstName} {lastName}
		</a>
	</small>
);

export default Footer;
