import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Components/Login";
 import Navbar from "./Components/Navbar"
import FarmInput from './Components/ FarmInputs';
import Farmers from "./Components/Farmer";
import Contacts from "./Components/Contact";
function App() {

  return (
    <div className="App">

      <Navbar />
      <BrowserRouter>
      <Switch>
        <Route exact path='/login'>
        <Login />
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


      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
