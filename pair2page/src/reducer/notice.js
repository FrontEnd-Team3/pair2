import { MockPostDetail } from '../data/faker'

const noticeData = MockPostDetail(12)

const initialState = noticeData.map(data => ({
	id: data.id,
	user: data.Comments[0].user,
	title: data.Comments[0].title,
	content: data.Comments[0].contents,
	date: data.Comments[0].writtenDate,
	state: false,
}))

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_COMMENT':
			const newComment = state.map(item => {
				if (item.id === action.payload.id) {
					return {
						...item,
						title: [...item.title, action.payload.title],
					}
				}
				return item
			})
			return newComment
		default:
			return state
	}
}

export default reducer
