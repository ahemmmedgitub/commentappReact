// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentFile = props => {
  const {eachUser, onClickLikeBtn, onDeleteComment} = props
  const {id, name, comment, isFavorite, date, backGroundColor} = eachUser

  const likeOrLikedImg = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const convertedDate = formatDistanceToNow(date)

  const likeClassName = isFavorite ? 'blue' : ''

  const firstLetter = name[0]

  const clickLikeBtn = () => {
    onClickLikeBtn(id)
  }

  const onDelteCmt = () => {
    onDeleteComment(id)
  }

  return (
    <li className="user-comment-container">
      <div className="name-time-container">
        <h1 className="commenter-name">
          <span className={`first-letter ${backGroundColor}`}>
            {firstLetter}
          </span>
          {name}
        </h1>
        <p className="time">{convertedDate}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="like-delete-container">
        <div className="like-logo-container">
          <img
            src={likeOrLikedImg}
            alt="like"
            className={`like-btn ${likeClassName}`}
          />
          <button
            onClick={clickLikeBtn}
            type="button"
            className={`like ${likeClassName}`}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          onClick={onDelteCmt}
          className="delete-btn"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="separator" />
    </li>
  )
}
export default CommentFile
