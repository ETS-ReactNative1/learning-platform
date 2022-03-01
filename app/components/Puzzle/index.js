import React from 'react';
import Img from '../Img';

function Puzzle() {
  // const [url, setUrl] = useState('./maxresdefault.jpg');
  const url = './maxresdefault.jpg';
  // const renderPuzzleItems = () => {

  // }

  return (
    <div className="puzzle">
      <h2>Puzzle</h2>
      <Img src={url} height={600} alt="steins gate" />
      <div className="puzzle__wrapper" />
    </div>
  );
}

export default Puzzle;
