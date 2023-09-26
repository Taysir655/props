 import React from 'react';
 import PlayersList from './components/PlayersList';
import Players from './players/Players';



function App() {
  return (
    <div>

  

      <PlayersList Playerslist={Players} />
   
    </div>
    
  );
}

export default App;
