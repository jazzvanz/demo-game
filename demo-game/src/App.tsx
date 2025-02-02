import { useState, useEffect, useCallback } from 'react';
import { intialPanelValues, winningCombinations, Panel } from './constants/constants'
import { Board } from './components/index'

function App() {
  const [panelsValues, setPanelsValues] = useState<Panel[]>(intialPanelValues);
  const [isPlayerX, setIsPlayerX] = useState<boolean>(true);
  const [isDraw, setIsDraw] = useState<boolean>(false);
  const [winner, setWinner] = useState<null | string>(null);

  const checkWinner = useCallback((selectedPanels: Panel[], numberSet: string[], player: string) => { 
    const selectedByPlayer = selectedPanels.filter(({ number }) => numberSet.includes(number));
    if (selectedByPlayer.length === 3) setWinner(player);
    return winner

  },[winner])

  useEffect(() => {
    if (!winner && !isDraw) return 

    if (!winner && isDraw && confirm(`The Game is a Draw, Restart Game?`)) { 
      handleReset();
      return
    }

    if (confirm(`Player ${winner} won, Reset Game?`)) {
      handleReset();
    }
  }, [winner, isDraw])

  useEffect(() => { 
    // Less then 3 Panels have been selected in the game
    const selectedPanels = panelsValues.filter((panel) => {
      return panel.selected !== null
    });

    if (selectedPanels.length < 3) return
  
    // Less then 3 panels by either 
    const selectedByPlayerOne = selectedPanels.filter((panel) => {
      return panel.selected === 'X'
    });

    const selectedByPlayerTwo = selectedPanels.filter((panel) => {
      return panel.selected === 'Y'
    })

    if (selectedByPlayerOne.length < 3 && selectedByPlayerTwo.length < 3) return 

    // Checking for Draw
    if (selectedPanels.length === 9) { 
      setIsDraw(true);
    }

    for (let i = 0; i < winningCombinations.length; i++) { 
      const winningSet = winningCombinations[i]

      checkWinner(selectedByPlayerOne, winningSet, 'X');
      checkWinner(selectedByPlayerTwo, winningSet, 'Y');
    }
  }, [checkWinner, panelsValues])

  const handleSelectPanel = (panelId: string, playerId: string | null) => { 
    const updatedPanelsDetails = panelsValues.map((panel) => { 
      const updatedPanel = panel.number === panelId ? { number: panelId, selected: playerId } : panel;
      return updatedPanel
    })

    setPanelsValues(updatedPanelsDetails);
    setIsPlayerX(!isPlayerX);
  }

  const handleReset = () => { 
    setWinner(null);
    setIsDraw(false);
    setIsPlayerX(true);
    setPanelsValues(intialPanelValues);
  }

  return (
    <div className="bg-[#16404D] w-full min-h-screen p-8">
      <div className="max-w-xl w-full mx-auto bg-[#DDA853] p-4 shadow-lg rounded-md">

        <div className="flex justify-center  p-6" aria-live="polite">
          <h2>Player Turn: Player {isPlayerX ? 'X' : 'Y'}</h2>
        </div>

        <Board>
          {panelsValues.map(({ number, selected }) => { 
            return (
              <button
                key={number}
                onClick={() => handleSelectPanel(number, isPlayerX ? 'X' : 'Y')}
                aria-label={`Sqaure Number${Number}: ${selected ? 'selected by player ' + selected : 'available to select'}`}
                disabled={selected !== null || winner !== null}
                className="bg-[#FBF5DD] shadow-lg hover:bg-[#FBF5DD]/60 focus:bg-[#FBF5DD]/60 active:bg-[#FBF5DD]/60 disabled:bg-[#FBF5DD]/60 rounded-md aspect-square">
                  <span aria-hidden={true}>{selected}</span>
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
