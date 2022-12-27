import "./usersGrid.styles.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
const UsersGrid = () => {
  const { users } = useContext(UserContext);
  console.log(users);
  return (
    <div className="usersGrid">
      {users.map((i) => {
        return (
          <div key={i.id} className="users-item">
            <img className="avatar" src={`${i.avatar}`} />
            <div className="info">
              <div className="name">
                {i.first_name} {i.last_name}
              </div>
              <div className="email">{i.email}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersGrid;
