import React from "react";
import PropTypes from "prop-types";
import "bootstrap";
export const Character = props => {
	return (
		<div className="d-inline-flex ">
			{/* post */}
			<div
				id="characters"
				className="card  mt-5 bg-dark "
				style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2018/02/han-solo-chewie-finn-star-wars-the-force-awakens-macarena-meme.jpg?q=50&fit=crop&w=740&h=555"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.char.name}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the cards content.
					</p>
					<div>
						<a href="#" className="btn btn-primary">
							Learn More!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

Character.propTypes = {
	char: PropTypes.object
};
