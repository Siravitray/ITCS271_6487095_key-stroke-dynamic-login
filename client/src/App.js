// import the Login and Register components from their respective files
import Login from "./components/login/login"
import Register from "./components/register/register"

// import the necessary components from the react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

// define the App component
function App() {
  return (
    // wrap everything in a div with a lavender background color
    <div className="App" style={{backgroundColor: "lavender"}}>
      <div className="bg-lightslategray h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
      <Router>
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>

      </Router>
      </div>
    </div>
    </div>
  );
}

// export the App component so it can be used in other files
export default App;