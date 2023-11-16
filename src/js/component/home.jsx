import React from "react";

import Counter from "./Counter.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{"YOU"}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			{setInterval(() => {
				let a = 0
				Counter(a);
			}, 5000)}
		</div>
	);
};

export default Home;
