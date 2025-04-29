import { use } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const useAuth = () => {
  const context = use(AuthContext);
  return context;
};

export default useAuth;
