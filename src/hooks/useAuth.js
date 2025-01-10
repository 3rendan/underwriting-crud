import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the import path as necessary

export const useAuth = () => {
  return useContext(AuthContext);
};
