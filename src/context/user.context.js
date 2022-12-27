const { createContext, useState } = require("react");

export const UserContext = createContext({
  users: [],
  setUsers: () => null
});

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const values = {
    users,
    setUsers
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
