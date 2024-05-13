import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useReducer } from 'react'
// V importing for the button symbols and imagesV
import symbols from './models/symbols';
import codeImages from './models/codeImages';

// V importing Carousel component V
import Carousel from './components/Carousel';



const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return{
        count: state.count + 1,
        currentImage: codeImages[state.count]
      };
  
    case "DECREMENT":
      return{
        count: state.count - 1,
        currentImage: codeImages[state.count]
      };
            
    case "REMOVE":
      return{
        count: state.count,
        currentImage: codeImages[state.count]
      };

    default:
      break;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer,
    {
      count: 0,
      currentImage: codeImages[0],
    }
  )

  return (
    <>
      <div className="App">
        <Carousel btnSymbols={symbols} allDispatch={dispatch}/> 
      
      </div>
    </>
  )
}

export default App
