// Write your code here
const commentItem = props => {
  const {eachUser} = props
  const {inputName, inputComment} = eachUser

  return (
    <li>
      <h1>{inputName}</h1>
      <p>{inputComment}</p>
    </li>
  )
}
export default commentItem
