import './App.css'
import { useReducer } from 'react'

// V importing for the button symbols and imagesV
import symbols from './models/symbols';
import codeImages from './models/codeImages';
// console.log(codeImages)
// V importing Carousel component V
import Carousel from './components/Carousel';



const reducer =  (state, action) => {
  let newCount;
  // console.log(`This is the codeimages array:`)
  // console.log(codeImages)
  let imageArray = codeImages;
  // console.log("This is the imageArray array")
  // console.log(imageArray)
  switch (action.type) {
   case "INCREMENT":
    newCount = state.count + 1;
    if (newCount >= imageArray.length) {
      // Reset count to 0 if it goes beyond the array length
      console.log("limit reached; going to start of imagearray")
      newCount = 0
      return{
        count: newCount,
        currentImage: codeImages[newCount]
      };
    } else {
     return{
        count: newCount,
        currentImage: codeImages[newCount]
      }
    }
  
    case "DECREMENT":
      newCount = state.count - 1;
      if (newCount <= 0) {
        // Reset count to 0 if it goes beyond the array length
        newCount = imageArray.length - 1
        console.log("0 going to end of imagearray")
        return{
          count: newCount,
          currentImage: codeImages[newCount]
        };
      } else {
       return{
          count: newCount,
          currentImage: codeImages[newCount]
        }
      }
            
    case "REMOVE":
      return{
        count: state.count,
        currentImage: codeImages[state.count]
      };

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer,
    {
      count: 0,
      currentImage: `${codeImages[0]}`,
    }
  )

  // console.log(state.currentImage)
  return (
    <>
      <div className="App">
        <Carousel btnSymbols={symbols} theImage={state.currentImage} allDispatch={dispatch}/> 
      
      </div>
    </>
  )
}

export default App