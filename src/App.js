import './App.css';
import MilageCalculator from './Milage/MilageCalculator';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MilageCalculator/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
