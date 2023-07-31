import {useState} from 'react'
import {v4 as uuidV4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setComment] = useState('')
  const [commentsList, setCommentsList] = useState([])
  const changeName = event => {
    setName(event.target.value)
  }

  const changeComment = event => {
    setComment(event.target.value)
  }

  const onSubmitCommentDetails = event => {
    event.preventDefault()
    const newComment = {
      uuidV4,
      name,
      commentText,
    }
    setName('')
    setComment('')
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmitCommentDetails}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={changeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={changeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={eachComment.uuidV4} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
