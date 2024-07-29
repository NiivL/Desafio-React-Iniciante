import ColoredText from './components/coloredText/coloredText'
import Button from './components/Button/Button'
import './App.css'


const showLabel = () => {
  const textLabel = document.querySelector('.btn').innerText; 
  alert(`a label desse botão é: ${textLabel}`);
}

function App() {
  return(
      <>
        <div>
          <ColoredText/>
          <Button showLabel={showLabel}/>
        </div>
      </>
  )}

export default App
