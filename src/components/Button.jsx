const Button = ({dispatch, inside}) => {
  return (
    <button onClick={dispatch} className="btn">
        {inside}
    </button>
  )
}
export default Button