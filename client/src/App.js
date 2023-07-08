import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AddUser from './component/AddUser/addUser';
import Header from './component/Header/header';
import AllUser from './component/AllUsers/allUser';
import DataBase from './component/DataBase/database';
import EditUser from './component/EditUser/editUser';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<DataBase />} />
        <Route path='/Add' element={<AddUser />} />
        <Route path='/All' element={<AllUser />} />
        <Route path='/Edit/:userId' element={<EditUser />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
