import React from "react";
// import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';


function ColorDetails() {
    let { color } = useParams();

    const divStyle = {
        backgroundColor: color,
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontSize: '2rem',
        textTransform: 'capitalize'
    };

    return (
        <div style={divStyle}>
            <h1>You selected { color } </h1>
        </div>
    )
}

export default ColorDetails;