import React, { useState } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
// import Nav from './Nav';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';
import './App.css';
import { useParams } from 'react-router-dom';


function App() {
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  }

  const ColorDetailsWrapper = () => {
    const { color } = useParams();
    if (!colors.includes(color.toLowerCase())) {
      return <Navigate to="/colors" replace />;
    }
    return <ColorDetails />;
  };



  return (
    <div>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors}/>} />
          <Route path="/colors/:color" element={<ColorDetailsWrapper />} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          {/* Redirect any other route to "/dogs" */}
          <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
