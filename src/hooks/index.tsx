import React from 'react';

import {AuthProvider} from './auth';
// import ToastContainer from '../components/ToastContainer';

const AppProvider: React.FC = ({children}) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
