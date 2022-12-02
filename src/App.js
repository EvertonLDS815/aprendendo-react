import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Psd from './pages/Psd'
import Photos from './pages/Photos'
import Vector from './pages/Vector'

function App() {
  return (
                    // Rotas
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vector" element={<Vector />} />
          <Route path="/fotos" element={<Photos />} />
          <Route path="/psd" element={<Psd />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
