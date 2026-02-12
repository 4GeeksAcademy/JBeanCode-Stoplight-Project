import React from "react";
import { useState } from 'react';

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const trafficColors = ["green", "yellow", "red"]
	const [trafficLight, setTrafficLight] = useState(trafficColors[0]);

	const settingTheColor = (index) => {
		setTrafficLight(trafficColors[index])
		return trafficColors[index]
	}

	return (
		<div className=" text-center justify-content-center">
            

			<h1 className="text-center mt-5">Change your traffic light!</h1>
			<div style={{height: 200 + "px" , width: 200 + "px"}} className={"red-light" + (current = "red" ? "current-red" : "") + "rounded-circle bg-danger m-auto"} onClick={() => settingTheColor(0)} >
			</div>
			<div style={{height: 200 + "px" , width: 200 + "px"}} className={"yellow-light" + (current = "yellow" ? "current-yellow" : "") + "rounded-circle bg-warning m-auto"} onClick={() => settingTheColor(1)} >
			</div>
			<div style={{height: 200 + "px" , width: 200 + "px"}} className={"green-light" + (current = "green" ? "current-green" : "") + "rounded-circle bg-success m-auto"} onClick={() => settingTheColor(2)}>
			</div>
			{/* add box shadow in CSS and tie those to the colors i input into the classnames */}
			<p>
				Made with love by JBeanCode
			</p>
		</div>
	);
};

export default Home;