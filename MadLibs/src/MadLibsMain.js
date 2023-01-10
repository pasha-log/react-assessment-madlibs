import React, {useState} from "react";
import NewMadlibForm from "./NewMadlibForm";
import Madlib from "./Madlib";

const MadLibsMain = () => {
    const [madlib, setMadLib] = useState()
    const [show, setShow] = useState(false)
    const addMadLib = (newMadlib) => {
        setMadLib({...newMadlib})
        setShow(!show);
    }
    return (
        <div>
            <h1>MadLibs!</h1>
            {!show && <NewMadlibForm addMadlib={addMadLib}/>}
            {show && <Madlib madlib={madlib}/>}
        </div>
    )
}

export default MadLibsMain;