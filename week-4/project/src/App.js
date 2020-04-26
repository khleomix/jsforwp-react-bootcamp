import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
//import ClassPosts from "./components/ClassPosts";
import FunctionPosts from "./components/FunctionPosts";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Header />
			{/* <ClassPosts /> */}
			<FunctionPosts />
			<Footer />
		</React.Fragment>
	);
}

export default App;
