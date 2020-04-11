import React from "react";

/*
  8. Destructure the props you will need
  9. Make the Website and Twitter links work based on props
*/
const Social = ({ url, twitter }) => (
	<ul className="social">
		<li>
			<a href={url}>Website</a>
		</li>
		<li>
			<a href={`https://twitter.com/${twitter}`}>Twitter</a>
		</li>
	</ul>
);

export default Social;
