// Write your code here
import './index.css'

const CommentFile = props => {
  const {eachUser, onClickLikeBtn, onDeleteComment} = props
  const {id, name, comment, isFavorite} = eachUser

  console.log(id)

  const likeOrLikedImg = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClassName = isFavorite ? 'blue' : ''

  const firstLetter = name[0]

  const clickLikeBtn = () => {
    onClickLikeBtn(id)
  }

  const onDelteCmt = () => {
    onDeleteComment(id)
  }

  return (
    <div className="user-comment-container">
      <h1 className="commenter-name">
        <span className="first-letter">{firstLetter}</span>
        {name}
      </h1>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <div className="like-logo-container">
          <img
            src={likeOrLikedImg}
            alt="like"
            className="like-btn"
            onClick={clickLikeBtn}
          />
          <p className={`like ${likeClassName}`}>Like</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete-btn"
          onClick={onDelteCmt}
        />
      </div>
      <hr className="separator" />
    </div>
  )
}
export default CommentFile
