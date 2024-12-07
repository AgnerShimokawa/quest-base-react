import './App.css'
import CapitalizingAndColoring from './components/capitalizing-and-coloring/capitalizing-and-coloring'
import Button from './components/button/button'

function App() {
  return (
    <>
     <CapitalizingAndColoring color="violet"></CapitalizingAndColoring>
     <CapitalizingAndColoring color="red"></CapitalizingAndColoring>
     <CapitalizingAndColoring />

     <Button label="Show Alert"></Button>
    </>
  )
}

export default App
