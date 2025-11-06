import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import SetupPage from './pages/SetupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/setup" element={<SetupPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/profile/:agentId" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
