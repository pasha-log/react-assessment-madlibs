import React, { useState } from 'react';
// import NewMadlibForm from './NewMadlibForm';
import Madlib from './Madlib';
import WithMaterialUI from './NewMadlibFormikForm';
import './MadLibsMain.css';

const MadLibsMain = () => {
	const [ madlib, setMadLib ] = useState();
	const [ show, setShow ] = useState(false);
	const addMadLib = (newMadlib) => {
		setMadLib({ ...newMadlib });
		setShow(!show);
	};
	return (
		<div>
			{/* <h1>MadLibs!</h1> */}
			<img className="Madlibs-title" src="https://keysweekly.com/wp-content/uploads/2019/09/madlibs.png" alt="" />
			{/* {show ? <Madlib madlib={madlib} /> : <NewMadlibForm addMadlib={addMadLib} />} */}
			{show ? <Madlib madlib={madlib} /> : <WithMaterialUI addMadlib={addMadLib} />}
		</div>
	);
};

export default MadLibsMain;
