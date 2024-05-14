import Button from "./Button"
import Image from "./Image"

const Carousel = (props) => {
  return (
    <div className="carouselContainer">
        <Image image={props.theImage}/>
      <div className="btnContainer">
        <div className="arrowBtnContainer">
            <Button dispatch={() => props.allDispatch({type:"DECREMENT"})} inside={props.btnSymbols.left}/>
            <Button dispatch={() => props.allDispatch({type:"INCREMENT"})} inside={props.btnSymbols.right}/>
        </div>
        <div className="removeContainer">
            <h2>Click the "X" button to remove the image</h2>
            <Button dispatch={() => props.allDispatch({type:"REMOVE"})} inside={props.btnSymbols.remove}/>
        </div>
      </div>
    </div>
  )
}
export default Carousel