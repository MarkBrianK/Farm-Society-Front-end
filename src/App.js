import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header"
import FarmInput from './Components/ FarmInputs';
import Farmers from "./Components/Farmer";
import Contacts from "./Components/Contact";
import Footer from "./Components/Footer"
function App() {

  return (
    <div className="App">


      <BrowserRouter>
      <Header />
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
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
