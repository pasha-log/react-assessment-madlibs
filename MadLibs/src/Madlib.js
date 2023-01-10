import React from "react";

const Madlib = ({madlib}) => {
    return (
        <div>
            <p>{`There was an ${madlib.color} ${madlib.noun} who loved a ${madlib.adjective} ${madlib.secondNoun}`}</p>
        </div>
    )
}

export default Madlib;