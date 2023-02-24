import { Route, Routes } from 'react-router';
import './App.css';
import AuthWithHistory from './Auth/auth';
import DonutComponent from './pages/DonutChart';
import LoginPage from './pages/login-page';
import Profile from './pages/profile';
import UploadFile from './pages/upload-page';


function App() {
  return (
    <div className="App">
      <AuthWithHistory>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/csvfile' element={<UploadFile/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/donut' element={<DonutComponent/>} />
      </Routes>
      </AuthWithHistory>
    </div>
  );
}

export default App;
