import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap whole app using react router */}
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/blogs/:id" component={BlogDetails} />
            <Route path="*">
              <NotFound />
            </Route>
            {/* <Route path="/">
              <Home />
            </Route> */}
            {/*this can't use because other paths inside the root path "/" if we use this we should use 'exact' key word*/}
          </Switch>
          {/* <Home /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
