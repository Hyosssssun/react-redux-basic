import React from "react";
import DisplayNumber from "./DisplayNumber";

export default function DisplayNumberRoot() {
	return (
		<div>
			<h1>Display Number Root</h1>
			<DisplayNumber />
		</div>
	);
}


/* PURE REACT */

/*
	import React from "react";
	import DisplayNumber from "./DisplayNumber";

	export default function DisplayNumberRoot({ numberToDisplay }) {
		return (
			<div>
				<h1>Display Number Root</h1>
				<DisplayNumber numberToDisplay={numberToDisplay} />
			</div>
		);
	}
*/