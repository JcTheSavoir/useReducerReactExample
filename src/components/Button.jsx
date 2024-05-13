const Button = ({dispatch, inside}) => {
  console.log(inside)
  return (
    <button onClick={dispatch} className="btn">
        {inside}
    </button>
  )
}
export default Button