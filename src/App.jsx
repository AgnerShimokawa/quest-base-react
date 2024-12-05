import './App.css'
import CapitalizingAndColoring from './components/capitalizing-and-coloring/capitalizing-and-coloring'
import Button from './components/button/button'

/*
Um componente que colore um parágrafo e deixe tudo com letra maiúsula. 
O componente precisa renderizar na tela um parágrafo colorido e capitalizado.
para colorir os texto é preciso usar as props.
pode utilizar o style inline para colorir os parágrafos
*/



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
