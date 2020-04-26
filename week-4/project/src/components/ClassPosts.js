import React from "react";

class PostsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: "",
		};
	}

	componentDidMount() {
		const fetchPosts = () => {
			fetch(`https://wordpress.org/news/wp-json/wp/v2/posts`)
				.then((response) => response.json())
				.then((posts) => this.setState({ posts: posts }))
				.catch((error) => console.error(error));
			console.log(fetchPosts);
		};

		fetchPosts();
	}

	render() {
		const allPosts = () =>
			Object.entries(this.state.posts).map((post, id) => {
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
					{this.state.posts ? allPosts() : "loading posts..."}
				</div>
			</main>
		);
	}
}

class SinglePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showExcerpt: true,
			showContent: false,
		};
	}

	render() {
		const togglePostContent = () => {
			if (this.state.showContent === false) {
				this.setState({ showExcerpt: false });
				this.setState({ showContent: true });
			} else {
				this.setState({ showExcerpt: true });
				this.setState({ showContent: false });
			}
		};

		const createExcerptMarkup = (excerpt) => ({ __html: excerpt });
		const createContentMarkup = (content) => ({ __html: content });

		const { id, link, title, excerpt, content } = this.props;

		const postExcerpt = this.state.showExcerpt ? (
			<div dangerouslySetInnerHTML={createExcerptMarkup(excerpt)} />
		) : (
			""
		);

		const postContent = this.state.showContent ? (
			<div dangerouslySetInnerHTML={createContentMarkup(content)} />
		) : (
			""
		);

		const btnLabel = this.state.showContent ? "Hide Full" : "Read More";

		return (
			<article id={`post-id-${id}`}>
				<h2>
					<a href={link}>{title}</a>
				</h2>
				<div className="excerpt-block">{postExcerpt}</div>
				<div className="content-block">{postContent}</div>
				<button
					onClick={togglePostContent}
					aria-expanded={this.state.showContent}
				>
					{btnLabel}
				</button>
			</article>
		);
	}
}

export default PostsList;
