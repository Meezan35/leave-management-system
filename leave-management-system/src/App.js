import { Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Employee from './components/employee';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/employee' element={<Employee/>}></Route>
    </Routes>
   

  );
}

export default App;
