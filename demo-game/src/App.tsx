import { useState, useEffect } from 'react';
import { WiAlien, WiMoonrise } from "react-icons/wi";
import { intialPanelValues, winningCombinations } from './constants/constants'
import { Board } from './components/index'

// - Add Icons
// - Design Overall
// Accessibilty use


function App() {
  const [panelsValues, setPanelsValues] = useState(intialPanelValues);
  const [isPlayerX, setIsPlayerX] = useState(true);

  useEffect(() => { 
    // checkWinner();
    console.log(winningCombinations)
  }, [panelsValues])

  const handleSelectPanel = (panelId: string, playerId: string | null) => { 
    const updatedPanelsDetails = panelsValues.map((panel) => { 
      const updatedPanel = panel.number === panelId ? { number: panelId, selected: playerId } : panel;
      return updatedPanel
    })

    setPanelsValues(updatedPanelsDetails);
    setIsPlayerX(!isPlayerX);
  }

  // function checkWinner() { 
  //   console.log('lets check the winenrs.')
  // }

  const handleReset = () => { 
    setIsPlayerX(true);
    setPanelsValues(intialPanelValues);
  }

  return (
    <div className="bg-[#16404D] w-full min-h-screen p-8">
       {/* Wrapper */}
      <div className="max-w-xl w-full mx-auto bg-[#DDA853] p-4 shadow-lg rounded-md">

        {/* Player Tracker */}
        <div className="flex justify-center  p-6">
          <h2>Turn: {isPlayerX ? <WiAlien /> : <WiMoonrise />}</h2>
        </div>

        <Board>
          {panelsValues.map(({ number, selected }) => { 
            return (
              <button
                key={number}
                onClick={() => handleSelectPanel(number, isPlayerX ? 'X' : 'Y')}
                aria-label="blank for now"
                disabled={selected !== null }
                className="bg-[#FBF5DD] shadow-lg hover:bg-[#FBF5DD]/60 focus:bg-[#FBF5DD]/60 active:bg-[#FBF5DD]/60 disabled:bg-[#FBF5DD]/60 rounded-md aspect-square">
                  {selected}
              </button> 
            )
          })}
        </Board>
        <div className="flex justify-center  p-6">
          <button
            className="shadow-lg bg-[#FBF5DD] hover:bg-[#FBF5DD]/60 focus:bg-[#FBF5DD]/60 active:bg-[#FBF5DD]/60 p-4 rounded-full"
            onClick={() => handleReset()}>
            Reset Board
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
