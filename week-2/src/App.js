import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => {
	return (
		<header id="main">
			<h1>Heavy is the head that wears the crown</h1>
		</header>
	);
};

const Content = () => {
	return (
		<main>
			<h2>
				People assume that time is a strict progression of cause to effect, but
				*actually* from a non-linear, non-subjective viewpoint - it's more like
				a big ball of wibbly wobbly... time-y wimey... stuff.
			</h2>
		</main>
	);
};

const Footer = () => {
	return (
		<footer className="footer">
			<p>We're all stories in the end. Just make it a good one, eh?</p>
			<small>JC Palmes - Week 2</small>
		</footer>
	);
};

function App() {
  return (
	<React.Fragment>
		<Header />
		<Content />
		<Footer />
	</React.Fragment>
  );
}

export default App;
