import { Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Hero from './components/Hero';
import UsersProfile from './components/UsersProfile';
import Dashboard from './components/Dashboard';
import AuthLayout from './components/auth/AuthLayout';
import RootLayout from './components/RootLayout';

function App() {

  return (
    <div>

      <Routes>
        {/* public route */}
        <Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>

        {/* private route */}
        <Route>
          <Route element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path='/user-profile/:id/*' element={<UsersProfile />} />
          <Route path='/dash-board' element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
