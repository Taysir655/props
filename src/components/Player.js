import React from 'react';
import Button from 'react-bootstrap/Button';

const Player = ({
  name = 'Name Inconnu',
  teame = 'teame Inconnue',
  nationality = 'Nationality Inconnue',
  jerseyNumber = 'Number Inconnu',
  age = 'Age Inconnu',
  img_url
}) => {
  const cardStyle = {
    width: '18rem',
    margin: '10px',
    display: 'inline-block',
    border: '1px solid #ccc', 
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  };

  const playerNameStyle = {
    padding: '10px 0',
    color: 'blue',
    borderBottom: '2px solid blue'
  };

  const buttonStyle = {
    marginTop: '10px',
    transition: 'background-color 0.3s, color 0.3s', // Transition pour la couleur de fond et de texte
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    color: 'white', // Couleur de texte par défaut
 
  };

  const detailKeyStyle = {
    fontWeight: 'bold',
    marginRight: '5px',
  };

  return (
    <div style={cardStyle}>
      <img src={img_url} alt={name} style={{ width: '100%', height: 'auto' }} />
      <div>
        <h4 style={playerNameStyle}>{name}</h4>
        <p><span style={detailKeyStyle}>Teame:</span> {teame}</p>
        <p><span style={detailKeyStyle}>Nationality:</span> {nationality}</p>
        <p><span style={detailKeyStyle}>jerseyNumber:</span> {jerseyNumber}</p>
        <p><span style={detailKeyStyle}>Age:</span> {age}</p>
        <Button className='bt' variant="primary" >Read More</Button>
      </div>
    </div>
  );
}

export default Player;