import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mainlayout from './container/mainLayout';
import Homepage from './container/page/homePage';

function App() {
  return (
  <BrowserRouter>
    <Routes path='/' element={<Mainlayout/>}>
      <Route index element={<Homepage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
