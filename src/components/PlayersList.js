import React from 'react';
import Player from './Player';
import'./style.css'
const PlayersList = ({Playerslist}) => {
  console.log(Playerslist)
  return (
    <div className='containerr'>
      <div className='row' >
        {Playerslist.map((Playe,indix) => (
          <div  key={indix} className='col-md-3 '>
            <Player {...Playe} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersList;