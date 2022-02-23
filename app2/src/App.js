import React from 'react';

const App = ({ onClick }) => {
  const handleClick = () => {
    console.log('[app2] inside click');
    onClick();
  };

  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
      onClick={handleClick}
    >
      <h1>App 2</h1>
    </div>
  );
};

export default App;
