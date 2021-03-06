import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage/AdminDashboardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ExploreAllPage from './pages/ExploreAllPage/ExploreAllPage';
import PurchasePage from './pages/PurchasePage/PurchasePage';

function App() {
  return (
    <div className="App min-vh-100">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/explore-all-products">
              <ExploreAllPage></ExploreAllPage>
            </Route>
            <PrivateRoute path="/purchase/:productID">
              <PurchasePage></PurchasePage>
            </PrivateRoute>
            <PrivateRoute path="/user-dashboard">
              <UserDashboardPage></UserDashboardPage>
            </PrivateRoute>
            <PrivateRoute path="/admin-dashboard">
              <AdminDashboardPage></AdminDashboardPage>
            </PrivateRoute>
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
