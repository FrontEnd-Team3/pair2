import styled from 'styled-components'
import { useReviewModal } from '../../context/review-modal'
import { StarRating } from 'grommet'

const AddReviewModal = () => {
	const { handleModalOpen, setAddedValue } = useReviewModal()

	return (
		<>
			<Wrapper onClick={() => handleModalOpen()}></Wrapper>
			<ModalContainer>
				<ModalContent>
					<h5>Add Your Review</h5>
					<StarRating name="rating" />
					<ContentsBox>
						<TitleBox name="title" placeholder="title" />
					</ContentsBox>
					<ContentsBox>
						<textarea name="contents" placeholder="contents" />
					</ContentsBox>
					<SubmitButton type="submit">SUBMIT</SubmitButton>
				</ModalContent>
			</ModalContainer>
		</>
	)
}

export default AddReviewModal

const Wrapper = styled.div`
	z-index: 1000;
	position: fixed;
	width: 100%;
	height: 100%;
`

const ModalContainer = styled.div`
	z-index: 1001;
	width: 500px;
	height: 350px;
	position: fixed;
	top: 42%;
	left: 48%;
	transform: translate(-50%, -50%);
	background-color: #f7f7f7;
	border-radius: 8px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	padding: 35px;
`

const ModalContent = styled.div`
	width: 100%;
	height: 350px;
	padding-top: 5%;
	height: 250px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	h5 {
		font-weight: bold;
		color: salmon;
	}
	input {
		margin: 10px 0;
	}
	textarea {
		margin-top: -20px;
		border: none;
		width: 400px;
		height: 80px;
		background-color: transparent;
		border-bottom: solid 0.5px black;
	}
`
const TitleBox = styled.input`
	background-color: transparent;
	height: 40px;
	width: 400px;
	border: none;
	border-bottom: solid 0.5px black;
`
const ContentsBox = styled.div`
	margin: 20px 0;
	width: 400px;
`
const SubmitButton = styled.button`
	width: 100px;
	border: none;
	background-color: salmon;
	color: white;
	height: 60px;
	margin-left: 40%;
	margin-top: 10px;
`
