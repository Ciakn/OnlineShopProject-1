import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const initialState = {
    user: null,
    isAuthicated: false,
  };

  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          
          user: action.payload,
          isAuthicated: true,
          
        };
      case "logout":
        return {
          user: null,
          isAuthicated: false,
        };

      default:
        throw new Error("unknown action");
    }
  };
  const Fakeuser = {
    name: "Cya",
    email: "test@gmail.com",
    password: "123456",
  };

  const [{ user, isAuthicated }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  function login(email, password) {
    console.log(email, password);
    if (email == Fakeuser.email && password == Fakeuser.password) 
      dispatch({ type: "login", payload: Fakeuser });
    
    
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  console.log(initialState.isAuthicated);
  return (
    <AuthContext.Provider value={{ user, isAuthicated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
