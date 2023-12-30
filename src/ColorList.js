import React from "react";
import { Link } from "react-router-dom";


function ColorList({ colors }) {

    const divStyle = {
        backgroundColor: 'pink',
        color: 'black',
        minHeight: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontSize: '2rem',
        textTransform: 'capitalize'
    };

    return (
        <div style={divStyle}>
            <h1>Please select a color. </h1>
            <Link to="/colors/new">Add a new color</Link>
            <div className="color-list-container"> 
                {colors && colors.map(color => ( 
                    <div key={color} className="color">
                        <ul>
                            <li><Link to={`/colors/${color.toLowerCase()}`}>{color}</Link></li> 
                        </ul>
                    </div> 
                ))}
            </div>
        </div>
    )
}

export default ColorList;