import { MockProductsDetail } from '../data/faker'

const noticeData = MockProductsDetail(12)

const initialState = noticeData.map(data => ({
	id: data.id,
	user: data.Comments2[0].user,
	title: data.Comments2[0].title,
	title2: data.Comments2[0].title2,
	content: data.Comments2[0].contents,
	date: data.Comments2[0].writtenDate,
	state: false,
}))

const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default reducer
