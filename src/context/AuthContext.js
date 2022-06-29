import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const login = (username, callback) => {
    setName(username);
    callback();
  };

  const logout = (callback) => {
    setName("");
    callback();
  };
  const value = { name, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
