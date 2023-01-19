import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Composants/AddUser';
import UpdateUser from './Composants/UpdateUser';
import UserList from './Composants/UserList';
function App() {
  return (
    <div class="container" style={{paddingLeft:40}}>
      <div class="card-header">
        <h1 >First Projet Vercel</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/update-user/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;