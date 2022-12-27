import axios from "axios";
import "./navbar.styles.scss";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { users, setUsers } = useContext(UserContext);
  const handleUserFetch = async () => {
    const res = await toast.promise(
      axios.get("https://reqres.in/api/users?page=1#"),
      {
        pending: "fetching users",
        success: "fetching users Successfull",
        reject: "fetching users failed"
      },
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      }
    );

    setUsers(res.data.data);
  };

  return (
    <div className="navbar">
      <div className="main-wrapper navigation">
        <span>User</span>
        <span className="btn" onClick={handleUserFetch}>
          Get Users
        </span>
      </div>
    </div>
  );
};

export default Navbar;
