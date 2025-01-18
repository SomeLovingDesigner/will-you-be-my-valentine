import { useState } from 'react';
import './index.css';

const phrases = [
  "No",
  "why 8(",
  "pleeaaaase?",
  "you better not click me again",
  "this is my thirteenth reason.",
  "Pleaseee please please",
  "MY HEARTTTT ISSS BREAAAKINGGGG",
  "TIAARESSSSSSS",
  "PLEAAAAAAAAAAAAAAAAAAAAAAAAAAASSSEEEEEEE",
  "I CAN'T TAKE IT ANYMORE!!",
  "PLEASE NOOOOOO!",
  "IT'S TOO MUCH!!",
  "DO YOU HATE ME???",
  "I CAN'T BREATHHEEE",
  "I’M FADING AWAYYYY!",
  "IS THIS THE END?!",
  "DON’T DO THIS TO ME!!!",
  "I'M GONEEEEE!",
  "IS THIS MY FINAL MOMENT??",
  "WHY WOULD YOU DO THIS TO ME??",
  "SOMEONE PLEASE HOLD ME!"
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [shakeIntensity, setShakeIntensity] = useState('');

  const yesButtonSize = noCount * 20 + 16;

  // Handle "YES" button click
  function handleYesClick() {
    setYesPressed(true);
    setTimeout(() => setShowSecondButton(true), 1350);
  }

  // Handle "NO" button click with screen shake
  function handleNoClick() {
    setNoCount(noCount + 1);

    // Determine shake intensity based on noCount
    const intensity = noCount < 5 ? 'shake' : 'shake-intense';
    setShakeIntensity(intensity);

    // Remove shake class after animation
    setTimeout(() => setShakeIntensity(''), 1000);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className={`valentine-container ${shakeIntensity}`}>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>YAYYYYY&lt;33</div>
          {showSecondButton && (
            <button
              className='funButton'
              style={{ fontSize: '1.5em', marginTop: '10px' }}
              onClick={() => alert('Message me to get the next part <3')}
            >
              wait don't go! there's more :3
            </button>
          )}
        </>
      ) : (
        <>
          <img className='kiss' src="https://i.pinimg.com/originals/73/89/aa/7389aaa2a73b071ee7d3d782310e590b.gif" alt="bear with heart" />
          <div className='text'>Will you be my valentine, Tiares?🌹</div>
          <div className='both-Button'>
            <button
              className='yesButton'
              style={{ fontSize: yesButtonSize, backgroundColor: 'rgb(144, 238, 144)' }}
              onClick={handleYesClick}
            >
              Yes&lt;3
            </button>
            <button
              className='NoButton'
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
