import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useReducer } from 'react'



const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return{
        count: state.count + 1,

      };
  
    case "DECREMENT":
      return{
        count: state.count - 1,

      };
            
    case "REMOVE":
      return{
        count: state.count,
        
      };

    default:
      break;
  }
}

function App() {


  return (
    <>
      <div className="App">









      </div>
    </>
  )
}

export default App
