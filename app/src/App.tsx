import React from 'react';
import { Layout } from 'entities/Layout';
import { RouterProvider } from 'react-router-dom';
import { routers } from 'app-config/app-routes';
import { UserMessage } from 'features/user-message';
import './App.css';

const App = () => (
  <div className="App">
    <Layout>
      <RouterProvider router={routers} />
      <UserMessage />
    </Layout>
  </div>
);

export default App;
