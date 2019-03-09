import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		icon: "sun"
	},
	winter: {
		text: "Burr, it's chilly",
		icon: "snowflake"
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};

export default function SeasonDisplay(props) {
	const season = getSeason(props.lat, new Date().getMonth());
	console.log(season);

	const { text, icon } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${icon} icon`} />
			<div>{text}</div>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	);
}
