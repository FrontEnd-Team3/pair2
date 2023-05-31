import { createContext, useContext, useState } from 'react'

export const useReviewModal = () => useContext(ReviewModal)

const ReviewModal = createContext()

const ReviewModalProvider = ({ children }) => {
	const [isOpenModal, setIsOpenModal] = useState(false)
	const [addedvalue, setAddedValue] = useState({})
	const handleModalOpen = () => {
		setIsOpenModal(prev => !prev)
	}
	return (
		<ReviewModal.Provider
			value={{
				isOpenModal,
				setIsOpenModal,
				handleModalOpen,
				addedvalue,
				setAddedValue,
			}}
		>
			{children}
		</ReviewModal.Provider>
	)
}

export default ReviewModalProvider
