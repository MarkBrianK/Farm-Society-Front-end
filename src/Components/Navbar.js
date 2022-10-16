import { Redirect } from "react-router-dom";
import Login from "./Login";

function Navbar({ onLogout }) {
    function handleLogout() {
      fetch("https://immense-dawn-24558.herokuapp.com/sessions", {
        method: "DELETE",
      }).then(() => onLogout());
    }

    return (
      <header>
        <button onClick={handleLogout}>
        
        </button>
      </header>
    );
}
    export default Navbar
