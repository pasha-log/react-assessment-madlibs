import React from 'react';
import './Madlib.css';
// import { Button } from '@material-ui/core';

const Madlib = ({ madlib }) => {
	return (
		<div>
			<p className="Madlib-result">{`There was an ${madlib.color} ${madlib.noun} who loved a ${madlib.adjective} ${madlib.secondNoun}.`}</p>
			{/* <Button variant="contained">Restart</Button> */}
		</div>
	);
};

export default Madlib;
