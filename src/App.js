import Home from './containers/home';
import 'react-notifications/lib/notifications.css'
import {NotificationContainer} from 'react-notifications'
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './containers/profile';

function App() {
  return (
    <div className="main">
      <NotificationContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home />} />
          <Route
            path="/profile"
            element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
