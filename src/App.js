import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllDronesPage from './pages/AllDronesPage/AllDronesPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';
import HeaderNavigation from './pages/SharedComponents/HeaderNavigation/HeaderNavigation';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App min-vh-100">
      <AuthProvider>
        <Router>
          <HeaderNavigation></HeaderNavigation>
          <Switch>
            <PrivateRoute path="/explore-all-products">
              <AllDronesPage></AllDronesPage>
            </PrivateRoute>
            <Route path="/user-dashboard">
              <UserDashboardPage></UserDashboardPage>
            </Route>
            <Route path="/admin-dashboard">
              <AdminDashboardPage></AdminDashboardPage>
            </Route>
            <Route path="/log-in">
              <LoginPage></LoginPage>
            </Route>
            <Route path="/register">
              <RegisterPage></RegisterPage>
            </Route>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
