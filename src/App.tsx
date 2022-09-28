import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import { Navbar, Sidebar } from './ui';
import { Home, Theme, Explore, Notification } from './pages';

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
              <Route path="theme" element={<Theme />} />
              <Route path="explore" element={<Explore />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
};

export default App;