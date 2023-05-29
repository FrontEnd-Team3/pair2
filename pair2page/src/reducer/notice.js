import { MockProductsDetail } from '../data/faker'

const noticeData = MockProductsDetail(12)

const initialState = noticeData.map(data => ({
	id: data.id,
	user: data.Comments[0].user,
	title: data.Comments[0].title,
	title2: data.Comments[0].title2,
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
						title2: [...item.title2, action.payload.title2],
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
