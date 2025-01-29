import { useState } from 'react';
import { intialPanelValues } from './constants/constants'
import { Board, Panel } from './components/index'

// TODO Today - Wednesday
// - Wrapper/Basic Layout for page (including different possible components we want to add)
// - add structure of state for the nine panels
// - add layout for the 9 panels
// - reset button! 
// - onClick on on panel - Panel should be button for accesibility? 
// - Add Icons

function App() {

  const [ panelsValues, setPanelsValues ] = useState(intialPanelValues)
  return (
    <div className="bg-[#16404D] w-full min-h-screen p-8">
       {/* Wrapper */}
      <div className="max-w-xl w-full mx-auto bg-[#DDA853] p-4">
        <Board>
          {panelsValues.map(({ number }) => { 
            return (
              <Panel key={number} value={number} />
            )
          })}
        </Board> 
        <button onClick={() => setPanelsValues(intialPanelValues)}>Reset Board</button>
      </div>
    </div>
  )
}

export default App
