import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import LeaguePage from './pages/Leaguepage';
import Filter from './pages/Filter';
import Counter from './pages/Counter';
import AccordianPage from './pages/AccordianPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="league/:_id" element={<LeaguePage />} />
          <Route path="filter" element={<Filter />} />
          <Route path="counter" element={<Counter />} />
          <Route path="accordian" element={<AccordianPage />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Player id='1' name='Charles' age='36' height="5'10" image="https://marriedwikibio.com/wp-content/uploads/2020/12/Chris-Davis.png" /> */}
    </div>
  );
}

export default App;
