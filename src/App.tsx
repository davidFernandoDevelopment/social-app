import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import { Home, Explore } from './pages';
import { Navbar, Sidebar, Theme } from './ui';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="o-main">
        <div className='o-main__container o-container'>
          <Sidebar />
          <div className="o-main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </main>
      <Theme />
    </Router>
  );
};

export default App;