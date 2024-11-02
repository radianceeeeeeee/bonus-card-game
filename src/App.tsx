import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import info from './assets/info.png';

const cards = [
                "Mushroom", "Mushroom", "Mushroom", "Mushroom",
                "Flower", "Flower", "Flower", "Flower",
                "Star", "Star", "Star", "Star",
                "10 Coins", "10 Coins", 
                "20 Coins", "20 Coins", 
                "1UP", "1UP"
]

function App() {
  const [flippedCards, setFlippedCards] = useState<Map<number, boolean>>(new Map());
  const [showCredits, setShowCredits] = useState(false);

  function toggleCredits() {
    setShowCredits(!showCredits);
  }

  function flipCard(id: number) {
    setFlippedCards(new Map(flippedCards).set(id, !flippedCards.get(id)));
  }

  return (
    <div className='
      bg-slate-900 h-screen w-screen md:overflow-clip overflow-scroll
    '>
      <div className='mx-auto'>
        <div className='
          p-8
          grid md:grid-cols-6 grid-cols-3
        '>
          {
            cards.map((card, index) => (
              <Card content={card} id={index} isFlipped={flippedCards.get(index) ?? false} onFlip={() => flipCard(index)}/>
            ))
          }
        </div>
      </div>

      <img src={info} width={24} height={24} className='mx-2 cursor-pointer' onClick={toggleCredits}></img>
      <div className={`
          ${showCredits ? 'block' : 'hidden'}
        `}>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8  rounded-lg flex flex-col">
                <h1 className='font-bold text-2xl mb-4'>Credits</h1>
                <a href="https://www.flaticon.com/free-icons/super-mario" title="super mario icons">Super mario icons created by Those Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/casino" title="casino icons">Casino icons created by Those Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/brick" title="brick icons">Brick icons created by Those Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/question-mark" title="question mark icons">Question mark icons created by Those Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/video-game" title="video game icons">Video game icons created by Those Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/ticket" title="ticket icons">Ticket icons created by Those Icons - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Freepik - Flaticon</a>
                <button onClick={toggleCredits} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4'>Close</button>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
