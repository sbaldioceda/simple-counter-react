import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	const caja = {
		background: "#070707"
	};
	const tiempo = {
		background: "#161616",
		fontSize: "50px",
		color: "#FFFFFF"
	};

	return (
		<div className="container mt-2">
			<div className="row h-100" style={tiempo}>
				<div className="col m-2 rounded text-center tiempo">
					<i className="text-center far fa-clock"></i>
				</div>
				<div className="col m-2 rounded text-center" style={caja}>
					{props.caja6}
				</div>
				<div className="col m-2 rounded text-center" style={caja}>
					{props.caja5}
				</div>
				<div className="col m-2 rounded text-center" style={caja}>
					{props.caja4}
				</div>
				<div className="col m-2 rounded text-center" style={caja}>
					{props.caja3}
				</div>
				<div className="col m-2 rounded text-center" style={caja}>
					{props.caja2}
				</div>
				<div className="col m-2 rounded text-center" style={caja}>
					{props.caja1}
				</div>
			</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	caja1: PropTypes.number,
	caja2: PropTypes.number,
	caja3: PropTypes.number,
	caja4: PropTypes.number,
	caja5: PropTypes.number,
	caja6: PropTypes.number
};

export default SecondsCounter;
