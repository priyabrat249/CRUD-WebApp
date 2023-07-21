import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AddUser from './component/AddUser/addUser';

import AllUser from './component/AllUsers/allUser';
import SignUp from './component/Home/signup';
import EditUser from './component/EditUser/editUser';
import LoginUser from './component/Home/login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/Add' element={<AddUser />} />
        <Route path='/All' element={<AllUser />} />
        <Route path='/Edit/:userId' element={<EditUser />} />
        <Route path='/login' element={<LoginUser />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
