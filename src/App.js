import "./App.css";
import "./cssmodules/dashboard.css";
import "./cssmodules/createLink.css";
import "./cssmodules/errorPage.css";
import "./cssmodules/nominate.css";
import "./cssmodules/login.css";
import "./cssmodules/nominationList.css";
import "./cssmodules/managenominees.css";
import "./cssmodules/nomineeperson.css";
import "./cssmodules/backers.css";
import "./cssmodules/nominationview.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardOld from "./components/dashboard";
import CreateLink from "./components/createLink";
import Nominate from "./components/nominate";
import NominatePerson from "./components/nominatePerson";
import NominationView from "./components/nominationView";
import Login from "./components/login";
import NominationList from "./components/nominationList";
import ManageNominees from "./components/manageNominees";
import { ProtectedRoute } from "./components/protectedRoute";
import ErrorPage from "./components/errorPage";
import PageNotFound from "./components/pageNotFound";
import Backers from "./components/backers";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/dashboard/theme";
import GlobalStyles from "./components/dashboard/GlobalStyles";
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [role, setRole] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("loginEmail");
        const res = await Axios.get(
            "http://localhost:8000/service/managenomineeaccess",
            { params: { userEmail } }
        );
        const data = res.data[0][0].access;
        setRole(data);
        console.log("Is admin or user: "+ data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return (
      <Router>
        <div>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Switch>
              <Route exact path='/' component={Login} />
              {role == "admin" ? (
                  <>
                    <Route
                        exact
                        path='/dashboard'
                        component={DashboardLayout}
                    />
                    <Route
                        exact
                        path='/createLink'
                        component={CreateLink}
                    />
                    <Route
                        exact
                        path='/nominationList'
                        component={NominationList}
                    />
                    <Route
                        exact
                        path='/manageNominees'
                        component={ManageNominees}
                    />
                    <Route path='/nominate/:token' component={Nominate} />
                    *
                    <Route path='/backers' component={Backers} />
                  </>
              ) : (
                  <>
                    <Route
                        path='/nominatePerson'
                        exact
                        component={NominatePerson}
                    />
                    <Route
                        path='/nominationView'
                        exact
                        component={NominationView}
                    />
                  </>
              )}
              <Route path='*' component={PageNotFound} />
            {/* <ProtectedRoute
              exact
              path='/dashboard'
              component={DashboardLayout}
            />
            <ProtectedRoute

              path='/dashboardOld'
              component={DashboardOld}
            /> */}
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
