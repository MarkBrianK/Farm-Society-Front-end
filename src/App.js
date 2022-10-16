import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./Components/Header"
import FarmInput from './Components/ FarmInputs';
import Farmers from "./Components/Farmer";
import Contacts from "./Components/Contact";
import Footer from "./Components/Footer"
import HomePage from "./Components/HomePage"
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import React,{useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://immense-dawn-24558.herokuapp.com/users").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return (
      <div className="App">


      <BrowserRouter>
      <Header />
      {/* <Login /> */}
      <Switch>
        <Route exact path='/'>
          <HomePage />

        </Route>
        <Route exact path='/inputs'>

        <FarmInput />

        </Route>
        <Route path='/farmers'>

          <Farmers />

        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/logout'>
          <Navbar />
        </Route>
        <Footer />


      </Switch>

      </BrowserRouter>
      </div>

    )
  } else {
    return <Login onLogin={setUser} />;
  }


}

export default App;
