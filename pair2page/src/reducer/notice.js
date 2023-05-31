import { MockPostDetail } from '../data/faker'

const noticeData = MockPostDetail(12)

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
		default:
			return state
	}
}

export default reducer
