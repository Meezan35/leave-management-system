import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Employee from './pages/employee';
import Admin from './pages/admin';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;
