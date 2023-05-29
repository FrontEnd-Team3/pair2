import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'reactstrap'
import styled from 'styled-components'
import OneComments from '../one-comments'

const OnePost = ({ data }) => {
	const [commentsInputValue, setCommentsInputValue] = useState('@you:')
	const dispatch = useDispatch()

	const handleChange = event => {
		event.preventDefault()
		setCommentsInputValue(event.target.value)
		console.log(commentsInputValue)
	}

	const handleAddComments = event => {
		event.preventDefault()
		dispatch({
			type: 'ADD_COMMENT',
			payload: {
				id: data.id,
				title2: commentsInputValue,
			},
		})
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
						value={commentsInputValue}
						onChange={handleChange}
					/>
				</td>
				<td colSpan={1}>
					<Button onClick={handleAddComments}>ADD</Button>
				</td>
			</DetailText>
			<OneComments data={data} />
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
