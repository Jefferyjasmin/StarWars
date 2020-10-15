import React from "react";
import PropTypes from "prop-types";
import "bootstrap";
export const Planet = props => {
	return (
		<div className="d-inline-flex ">
			{/* post */}
			<div
				id="planet"
				className="card  mt-5 bg-dark "
				style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://i.imgflip.com/3xtbam.jpg"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.plan.name}</h5>
					<p>{props.plan.rotation_period}</p>
					<p>{props.plan.orbital_period}</p>
					<p>{props.plan.diameter}</p>
					<p>{props.plan.climate}</p>
					<p>{props.plan.gravity}</p>
					<p>{props.plan.terrain}</p>
					<p>{props.plan.surface_water}</p>
					<p>{props.plan.population}</p>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<div className="Learnmore">
						<button className="btn btn-primary" href="#">
							Learn More!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Planet.propTypes = {
	plan: PropTypes.object
};
