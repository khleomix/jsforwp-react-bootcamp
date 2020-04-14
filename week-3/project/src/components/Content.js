import React, { Component } from "react";

const Button = (props) => (
	<button onClick={props.onClick} disabled={props.disabled}>
		{props.text}
	</button>
);

class Content extends Component {
	state = {
		disabled: false,
		contentText:
			"People assume that time is a strict progression of cause to effect, but *actually* from a non-linear, non-subjective viewpoint - it's more like a big ball of wibbly wobbly...time-y wimey... stuff.",
	};

	changeup = () => {
		this.setState({
			disabled: true,
			contentText:
				"The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles.",
		});
	};

	reset = () => {
		this.setState({
			disabled: false,
			contentText:
				"People assume that time is a strict progression of cause to effect, but *actually* from a non-linear, non-subjective viewpoint - it's more like a big ball of wibbly wobbly...time-y wimey... stuff.",
		});
	};

	render() {
		return (
			<main className="post">
				<h2>{this.state.contentText}</h2>
				<Button
					onClick={this.changeup}
					text="Change Content"
					disabled={this.state.disabled}
				/>
				<Button onClick={this.reset} text="Reset Content" />
			</main>
		);
	}
}

export default Content;
