import {useEffect, useState} from 'react'
import Tile from './Tile'
import '../styles/board.scss'

const Board: React.FC = () => {

  const [tilePosition, setTilePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          setTilePosition((prevPosition) => ({x: prevPosition.x, y: prevPosition.y - 1}));
          break;
        case 'ArrowDown':
          setTilePosition((prevPosition) => ({x: prevPosition.x, y: prevPosition.y + 1}));
          break;
        case 'ArrowLeft':
          setTilePosition((prevPosition) => ({x: prevPosition.x - 1, y: prevPosition.y }));
          break;
        case 'ArrowRight':
          setTilePosition((prevPosition) => ({x: prevPosition.x + 1, y: prevPosition.y }));
          break;  
        default:
        break;    
      }
    };

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    };
  }, [])
  
  const getRandomValue = () => Math.random() < 0.5 ? 2 : 4;
  
  
  return (
    <div className='board'>
    {Array.from({ length: 4 }, (_, rowIndex) => (
      <div className='row' key={rowIndex}>
       {Array.from({ length: 4 }, (_, colIndex) => (
        <Tile 
          value={getRandomValue()}
          key={colIndex}
          position={tilePosition}
        />
      </div>
    )}
    </div>
  )
}

export default Board