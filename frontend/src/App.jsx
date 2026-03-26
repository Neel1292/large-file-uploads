import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FileProvider } from './context/FileContext';
import FileUpload from './pages/FileUpload';
import FileView from './pages/FileView';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import AppHeader from './components/AppHeader';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <FileProvider>
          <div className="app-content">
            <AppHeader />
            <Routes>
              <Route path="/" element={<ProtectedRoute><FileView /></ProtectedRoute>} />
              <Route path="/upload" element={<ProtectedRoute><FileUpload /></ProtectedRoute>} />
              <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </FileProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
