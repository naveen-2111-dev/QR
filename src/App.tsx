import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QRscreen from './pages/QRscreen';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/qr' element={<QRscreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
