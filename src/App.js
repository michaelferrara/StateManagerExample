import React from 'react';
import './App.scss';
import HomeProvider from './providers/home-provider'
import HomeApp from './components/home-app'

function App() {
  return (
    <HomeProvider>
      <HomeApp />
    </HomeProvider>
  );
}

export default App;
