import React, { useState, useEffect } from "react";

const FuctionPosts = () => {
	const [posts, setPosts] = useState();

	const fetchPosts = () => {
		fetch(`https://wordpress.org/news/wp-json/wp/v2/posts`)
			.then((response) => response.json())
			.then((posts) => setPosts(posts))
			.catch((error) => console.error(error));
	};

	useEffect(() => console.log(posts), [posts]);

	useEffect(() => {
		fetchPosts();
	}, []);

	const allPosts = () =>
		Object.entries(posts).map((post, id) => {
			const currentPost = post[1];
			return (
				<SinglePost
					id={currentPost.id}
					key={id}
					link={currentPost.link}
					title={currentPost.title.rendered}
					excerpt={currentPost.excerpt.rendered}
					content={currentPost.content.rendered}
				/>
			);
		});

	return (
		<main>
			<div className="content-wrapper">
				{posts ? allPosts() : "loading posts..."}
			</div>
		</main>
	);
};

const SinglePost = ({ id, link, title, excerpt, content }) => {
	const [showContent, setShowContent] = useState(false);
	const [showExcerpt, setShowExcerpt] = useState(true);

	// Control content toggle.
	const togglePostContent = () => {
		if (showContent === false) {
			setShowExcerpt(false);
			setShowContent(true);
		} else {
			setShowExcerpt(true);
			setShowContent(false);
		}
	};

	const createExcerptMarkup = (excerpt) => ({ __html: excerpt });
	const createContentMarkup = (content) => ({ __html: content });

	const postExcerpt = showExcerpt ? (
		<div dangerouslySetInnerHTML={createExcerptMarkup(excerpt)} />
	) : (
		""
	);
	const postContent = showContent ? (
		<div dangerouslySetInnerHTML={createContentMarkup(content)} />
	) : (
		""
	);
	const buttonLabel = showContent ? "Hide Full" : "Read More";

	return (
		<article id={`post-id-${id}`}>
			<h2>
				<a href={link}>{title}</a>
			</h2>
			<div className="excerpt-block">{postExcerpt}</div>
			<div className="content-block">{postContent}</div>
			<button onClick={togglePostContent} aria-expanded={showContent}>
				{buttonLabel}
			</button>
		</article>
	);
};

export default FuctionPosts;
