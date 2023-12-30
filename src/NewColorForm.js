import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // to redirect after form submission

function NewColorForm({ addColor }) {
    const [color, setColor] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color); 
        navigate('/colors'); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newColor">Enter a color:</label>
            <input
                id="newColor"
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="Add a new color"
                required
            />
            <button type="submit">Add Color</button>
        </form>
    );
}

export default NewColorForm;
