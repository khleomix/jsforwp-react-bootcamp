import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var config = {
	apiKey: "AIzaSyDDAxDwnoGOUjWVPLMl_Y9aVeg2DcQ8Hok",
	authDomain: "jc-s-react-blog-demo.firebaseapp.com",
	databaseURL: "https://jc-s-react-blog-demo.firebaseio.com",
	projectId: "jc-s-react-blog-demo",
	storageBucket: "jc-s-react-blog-demo.appspot.com",
	messagingSenderId: "434565631764",
	appId: "1:434565631764:web:326cf9632ac290c0ecbc01"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
