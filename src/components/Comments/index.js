import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentFile from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    intialList: [],
    inputName: '',
    inputComment: '',
    count: 0,
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({inputComment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const {inputName, inputComment} = this.state

    const name = inputName
    const comment = inputComment

    const randomColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    console.log(randomColor)
    const newUser = {
      id: uuidv4(),
      name,
      comment,
      isFavorite: false,
      date: new Date(),
      backGroundColor: randomColor,
    }

    this.setState(prevState => ({
      intialList: [...prevState.intialList, newUser],
      count: prevState.count + 1,
      inputName: '',
      inputComment: '',
    }))
  }

  onClickLikeBtn = id => {
    this.setState(prevState => ({
      intialList: prevState.intialList.map(eachCart => {
        if (id === eachCart.id) {
          return {...eachCart, isFavorite: !eachCart.isFavorite}
        }
        return eachCart
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      intialList: prevState.intialList.filter(
        eachComment => id !== eachComment.id,
      ),
    }))

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {inputName, inputComment, intialList, count} = this.state

    return (
      <div className="bg-container">
        <div className="form-img-container">
          <div className="form-main-container">
            <h1 className="comment-heading">Comments</h1>
            <p className="technologies-description">
              say something about 4.O Technologies
            </p>
            <form className="form-container" onSubmit={this.onAddComment}>
              <input
                placeholder="Your Name"
                className="name-input"
                value={inputName}
                onChange={this.onChangeName}
              />
              <textarea
                className="text-area"
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                cols="50"
                rows="10"
                value={inputComment}
              >
                Your Comment
              </textarea>
              <button className="comment-btn" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </div>
        <hr className="separator" />
        <p className="comment-count-para">
          <span className="comment-count">{count}</span> Comments
        </p>
        <ul className="ul-elements">
          {intialList.map(eachUser => (
            <CommentFile
              eachUser={eachUser}
              key={eachUser.id}
              onClickLikeBtn={this.onClickLikeBtn}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
