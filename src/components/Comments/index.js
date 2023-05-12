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

const userList = [
  {
    id: uuidv4(),
    name: 'Rahul',
    comment: 'jfdkljakjfksflkdjklkfdsklk',
  },
]

class Comments extends Component {
  state = {
    intialList: [],
    inputName: '',
    inputComment: '',
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

    const newUser = {
      id: uuidv4,
      name,
      comment,
      isFavorite: false,
    }

    this.setState(prevState => ({
      intialList: [...prevState.intialList, newUser],
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
  }

  render() {
    const {inputName, inputComment, intialList} = this.state

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
          <span className="comment-count">0</span> Comments
        </p>
        {intialList.map(eachUser => (
          <CommentFile
            eachUser={eachUser}
            key={eachUser.id}
            onClickLikeBtn={this.onClickLikeBtn}
            onDeleteComment={this.onDeleteComment}
          />
        ))}
      </div>
    )
  }
}

export default Comments
