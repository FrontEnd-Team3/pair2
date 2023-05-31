import { createContext, useContext, useReducer } from 'react'
import { useProduct } from './one-product'

export const useReviews = () => useContext(ReviewsCart)

const ReviewsCart = createContext()

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_REVIEW':
			return [...state, action.payload]
		default:
			return state
	}
}

const ReviewsCartProvider = ({ children }) => {
	const { targetProduct } = useProduct()
	const initialComments = targetProduct.Comments
	const [reviews, reviewsDispatch] = useReducer(reducer, initialComments)
	return (
		<ReviewsCart.Provider value={{ reviews, reviewsDispatch }}>
			{children}
		</ReviewsCart.Provider>
	)
}
export default ReviewsCartProvider
