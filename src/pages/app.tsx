import React from 'react';
import Router from 'src/routes/router';
import NavBar from 'src/components/navbar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
};

export default App;
