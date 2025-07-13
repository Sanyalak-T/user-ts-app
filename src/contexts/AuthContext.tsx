import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { useNavigate, Link } from "react-router";
interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(
    null
  );

  const login = async (
    email: string,
    password: string
  ) => {
    // ในที่นี้ mock login
    if (
      email === "john@gmail.com" &&
      password === "12345"
    ) {
      setUser({ email });
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    // navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  return context;
};
