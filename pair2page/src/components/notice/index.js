import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Table } from 'reactstrap'
import styled from 'styled-components'
import OnePost from '../one-post'

const Notice = () => {
	const postData = useSelector(data => data.post)

	const [selectedPostId, setSelectedPostId] = useState(null)

	const handdleDetailOpen = id => {
		if (selectedPostId === id) {
			setSelectedPostId(null)
		} else {
			setSelectedPostId(id)
		}
		console.log(selectedPostId)
	}

	return (
		<>
			<NoticeBox className="notice-board">
				<NoticeHeader>
					<h1>Notice Board</h1>
					<Button>new post</Button>
				</NoticeHeader>
				<Table hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Date</th>
							<th>Username</th>
						</tr>
					</thead>
					<tbody>
						{postData.map((data, index) => (
							<>
								<tr
									key={index}
									onClick={() => {
										handdleDetailOpen(data.id)
									}}
								>
									<th scope="row">{index + 1}</th>
									<td>{data.title}</td>
									<td>{data.date}</td>
									<td>@{data.user}</td>
								</tr>
								{selectedPostId === data.id && <OnePost data={data} />}
							</>
						))}
					</tbody>
				</Table>
			</NoticeBox>
		</>
	)
}

export default Notice

const NoticeBox = styled.form`
	background-color: #faf3f4;
	padding: 40px;
`

const NoticeHeader = styled.div`
	display: flex;
	height: 100px;
	align-items: center;
	justify-content: space-between;
`
