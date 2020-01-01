import React from 'react';
import NavBar from 'src/components/navbar';
import Router from 'src/routes/router';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
};

export default App;
