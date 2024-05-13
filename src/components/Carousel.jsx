import Button from "./Button"
import Image from "./Image"

const Carousel = (props) => {
  return (
    <div className="carouselContainer">
        {/* <Image image={props.allImages}/> */}
        <div className="btnContainer">
            <Button dispatch={() => props.allDispatch({type:"DECREMENT"})} inside={props.btnSymbols.left}/>
            <Button dispatch={() => props.allDispatch({type:"INCREMENT"})} inside={props.btnSymbols.right}/>
        </div>
        <div className="removeContainer">
            <h2>Click the "{props.btnSymbols.delete}" button to remove the image</h2>
            <Button dispatch={() => props.allDispatch({type:"DELETE"})} inside={props.btnSymbols.remove}/>
        </div>
    </div>
  )
}
export default Carousel