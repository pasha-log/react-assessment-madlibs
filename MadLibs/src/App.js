import React from 'react';
import MadLibsMain from './MadLibsMain';

function App() {
  return (
    <div className="App">
      <MadLibsMain />
    </div>
  );
}

export default App;

// The main component will be Madlibs. Inside of it will be the title, and conditionally 
// either the NewMadlibForm or the finished Madlib. 
