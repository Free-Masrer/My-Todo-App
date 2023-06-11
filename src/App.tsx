import Mine from './components/mine/mine'
import RightBox from './components/rightbox/rightbox'
import { containerStyles } from './assets/styles/container.css'
import './App.css'

function App() {


  return (
    <>
      <div className={containerStyles({
        display: "flex",
        direction: "row",
        alignItems: "center",
        bkground: "second",
        padding: "default",
        gap: "small",
      })}>
        <Mine />
        <RightBox />
      </div>
    </>
  )
}

export default App
