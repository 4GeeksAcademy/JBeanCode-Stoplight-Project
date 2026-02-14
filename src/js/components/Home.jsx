import React from "react";
import { useState } from 'react';

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const trafficColors = ["green", "yellow", "red"]
	const [trafficLight, setTrafficLight] = useState(trafficColors[0]);
	const[indexPosition, setIndexPosition] = useState(0)

	const settingTheColor = (index) => {
		setTrafficLight(trafficColors[index])
		setIndexPosition(index)
		return trafficColors[index]
	}

	return (
		<div className=" text-center d-flex flex-column justify-content-center">
			<h1 className="text-center mt-5 mb-5">Change your traffic light!</h1>
			<div className="trafficBox d-flex flex-column align-items-around mx-auto bg-dark rounded-5">
				<div className={"light red-light bg-danger " + (trafficLight === "red" ? "current-red" : "") + " rounded-circle m-auto"} onClick={() => settingTheColor(2)} >
				</div>
				<div className={"light yellow-light bg-warning " + (trafficLight === "yellow" ? "current-yellow" : "") + " rounded-circle m-auto"} onClick={() => settingTheColor(1)} >
				</div>
				<div className={"light green-light bg-success " + (trafficLight === "green" ? "current-green" : "") + " rounded-circle m-auto"} onClick={() => settingTheColor(0)}>
				</div>
			</div>
			<button type="button" className="changeButton btn btn-info mt-4 m-auto" onClick={() => settingTheColor((indexPosition === 2 ? 0 : indexPosition+1))}>Change Light</button>
			<p className="mt-5">
				Made with <strong className="text-danger">love</strong> by JBeanCode
			</p>
		</div>
	);
};

export default Home;