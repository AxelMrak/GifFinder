// Imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import ErrorPage from './pages/404/ErrorPage';
import HomePage from './pages/home/HomePage';
import './App.css';

/**
 * ? Render app and set the routes.
 * @returns App and its routes
 */
function App() {
  return (
    <div className="App">
    {/* Set Router */}
      <Router>
      {/* Header is set in app and doesn't in an individual component because we need always show the header in all routes */}
        <header className='head'>
          <Link to={'/'}>Home</Link>
          <Link to={'/search'}>Search</Link>
        </header>
        {/* Routes */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/search' element={<Search />} />
          {/* 404 Route */}
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
