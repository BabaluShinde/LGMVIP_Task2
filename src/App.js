import { ToastContainer } from "react-toastify";
import "./styles.css";
import Navbar from "./component/navbar/navbar.component";
import UsersGrid from "./component/usersGrid/usersGrid.component";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <UsersGrid />
      <ToastContainer />
    </div>
  );
}

export default App;
