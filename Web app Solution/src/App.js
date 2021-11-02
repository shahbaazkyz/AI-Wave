import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import "./App.css"
import LabTabs from "./components/Tabs/Tabs";
import TabsDash from "./components/Tabs/Tabs";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Welcome from "./Pages/Welcome/Welcome";
import NextWelcome from "./Pages/Welcome/NextWelcome";
import StudentsMain from "./components/Dashboard/StudentsMain";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";



function App() {
  return (
    <>
      <Header />
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/">
              <Dashboard />
            </PrivateRoute>
            <Route path="/signin" component={Login} />

            <Route path="/signup" component={Registration} />
          </Switch>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
