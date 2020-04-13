import React from "react";

const Practice2 = () => {

	const post = {
		id: 1,
		title: 'New Post'
	};

	return (
		<div className="practice">
			<Post post={post} />
		</div>
	);
};

const Post = props => {
	return <p>{props.post.title} - {props.post.id}</p>;
};

export default Practice2;
