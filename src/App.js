import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Discovery } from './screens/Discovery';
import { MovieDetails } from './screens/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Discovery />} />
        <Route path="movie-details/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
