import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  name: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Intranett:token');
    const user = localStorage.getItem('@Intranett:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ name, password }) => {
    const response = await api.post('sessions', {
      name,
      password,
    });

    const { token, user } = response.data as AuthState;

    localStorage.setItem('@Intranett:token', token);
    localStorage.setItem('@Intranett:user', JSON.stringify(user));
    setData({ user, token });
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@Intranett:token');
    localStorage.removeItem('@Intranett:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;