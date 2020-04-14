import React from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

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
