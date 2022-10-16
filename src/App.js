import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./Components/Header"
import FarmInput from './Components/ FarmInputs';
import Farmers from "./Components/Farmer";
import Contacts from "./Components/Contact";
import Footer from "./Components/Footer"
import HomePage from "./Components/HomePage"
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
function App() {

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
        <Route path='/signup'>
          <SignUp />
        </Route>


      </Switch>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
