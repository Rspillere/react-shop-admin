import React, { useState, useContext, createContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from 'services/api';

const AuthContext = createContext();
export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

//Captar la información del usuario
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const token = Cookie.get('token');

  const checkToken = async () => {
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const signIn = async (email, password) => {
    if (token) {
      return;
    } else {
      const options = {
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
      };
      const {
        data: { access_token: token },
      } = await axios.post(endPoints.auth.login, { email, password }, options);

      if (token) {
        Cookie.set('token', token, { expires: 5 });

        axios.defaults.headers.Authorization = `Bearer ${token}`;

        const { data: user } = await axios.get(endPoints.auth.profile);
        setUser(user);
      }
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    logout,
  };
}
