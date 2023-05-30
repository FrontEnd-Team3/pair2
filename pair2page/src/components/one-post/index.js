import { useState } from 'react'
import { Button, Input } from 'reactstrap'
import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'

const OnePost = ({ data }) => {
	const [commentList, setCommentList] = useState([])
	const [commentsData, setCommentsData] = useState(MockProductsDetail(4))
	const [commentsState, setCommentsState] = useState(false)
	const [commentInputValue, setCommentInputValue] = useState('')
	const [editingCommentIndex, setEditingCommentIndex] = useState(-1)
	const [editedCommentValue, setEditedCommentValue] = useState('')

	const handleAddComments = event => {
		if (commentInputValue === '') {
			return
		}
		event.preventDefault()
		setCommentsState(true)
		setCommentList([commentInputValue, ...commentList])
		setCommentInputValue('')
	}

	const handleDeleteComments = index => {
		const newCommentList = [...commentList]
		newCommentList.splice(index, 1)
		setCommentList(newCommentList)
	}

	const renderNewComments = () => {
		return commentList.map((comment, index) => (
			<DetailCommentsText key={index} id={data.id}>
				<td>id: @{data.user}</td>
				<td colSpan={2}>
					{editingCommentIndex === index ? (
						<Input
							value={editedCommentValue}
							onChange={event => setEditedCommentValue(event.target.value)}
						/>
					) : (
						`⎿comments: ${comment}`
					)}
				</td>
				<td>
					{editingCommentIndex === index ? (
						<Button onClick={() => handleSaveComment(index)}>SAVE</Button>
					) : (
						<>
							<Button onClick={() => handleEditComment(index)}>EDIT</Button>
							<Button onClick={() => handleDeleteComments(index)}>
								DELETE
							</Button>
						</>
					)}
				</td>
			</DetailCommentsText>
		))
	}

	const handleEditComment = index => {
		setEditingCommentIndex(index)
		setEditedCommentValue(commentList[index])
	}

	const handleSaveComment = index => {
		const newCommentList = [...commentList]
		newCommentList[index] = editedCommentValue
		setCommentList(newCommentList)
		setEditingCommentIndex(-1)
		setEditedCommentValue('')
	}

	return (
		<>
			<DetailText>
				<td colSpan={4}>
					<TitleText>
						TITLE: {data.title} @{data.user}
					</TitleText>
				</td>
			</DetailText>
			<DetailText>
				<td colSpan={4}>
					<div>{data.title2}</div>
				</td>
			</DetailText>
			<DetailText>
				<td colSpan={3}>
					<Input
						name="comment"
						value={commentInputValue}
						onChange={event => setCommentInputValue(event.target.value)}
					/>
				</td>
				<td colSpan={1}>
					<Button onClick={handleAddComments}>ADD</Button>
				</td>
			</DetailText>
			{commentsState && renderNewComments()}
			{commentsData.map((data, index) => (
				<DetailCommentsText key={index}>
					<td>id: @{data.Comments[0].user}</td>
					<td colSpan={3}>⎿comments: {data.Comments[0].title}</td>
				</DetailCommentsText>
			))}
		</>
	)
}

export default OnePost

const TitleText = styled.div`
	font-weight: 500;
	text-align: center;
`
const DetailText = styled.tr`
	background-color: white;
`

const DetailCommentsText = styled.tr`
	background-color: white;
`
