import { Portfolio } from './components/portfolio/Portfolio';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './pages';

function App() {
  return (
    <BrowserRouter basename="/eventsState1ex">
      <Routes>
        <Route path='*' element={<Portfolio />} />
        <Route path="two" element={<PageOne />} />
        <Route path="three" element={<PageTwo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
