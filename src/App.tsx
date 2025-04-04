import './App.css'
import { Person } from './Person';


function App() {

  return (
    <>
      <Person name={"Samson"} age={22} isBeliver={true} />
      <Person name={"Unknown"} age={34} isBeliver={false} />
    </>
  )
}

export default App
