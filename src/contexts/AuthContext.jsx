import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // LOGIN
  const login = async (email, password) => {
    const res = await fetch(
      `http://localhost:3000/users?email=${email}&password=${password}`
    );

    const data = await res.json();

    if (data.length === 0) {
      throw new Error("Invalid Email or Password");
    }

    const loggedUser = data[0];

    localStorage.setItem(
      "user",
      JSON.stringify(loggedUser)
    );

    setUser(loggedUser);

    return loggedUser;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);