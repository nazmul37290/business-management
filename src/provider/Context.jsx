import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState(null);

  const userInfo = {
    user,
    setUser,
  };
  return (
    <div>
      <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
    </div>
  );
};

export default Context;

Context.propTypes = {
  children: PropTypes.any,
};
