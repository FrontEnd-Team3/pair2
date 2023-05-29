import { useState } from 'react'
import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'

const OneComments = () => {
	const [commentsData, setCommentsData] = useState(MockProductsDetail(4))
	return (
		<>
			{commentsData.map((data, index) => (
				<DetailCommentsText key={index}>
					<td>id: @{data.Comments[0].user}</td>
					<td colSpan={3}>⎿comments: {data.Comments[0].title}</td>
				</DetailCommentsText>
			))}
		</>
	)
}

export default OneComments

const DetailCommentsText = styled.tr`
	background-color: white;
`
