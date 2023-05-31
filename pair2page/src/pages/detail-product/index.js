import styled from 'styled-components'
import { useProduct } from '../../context/one-product'
import { Data, DataSearch, DataTable, Toolbar } from 'grommet'
import { useCart } from '../../context/cart'
import { useReviewModal } from '../../context/review-modal'
import AddReviewModal from '../../components/modal/add-review'

const DetailProductPage = () => {
	const { targetProduct } = useProduct()
	const { cartCount, setCartCount } = useCart()
	const ratingCount = Math.floor(targetProduct.AverageRating)
	const { isOpenModal, handleModalOpen } = useReviewModal()

	if (targetProduct) {
		return (
			<>
				{isOpenModal && <AddReviewModal />}
				<ContentsBox>
					<ProductTop>
						<ProductImage src={targetProduct.imageURL} />
						<div>
							<ProductNameBox>{targetProduct.productName}</ProductNameBox>
							<ProductDetailBox>{targetProduct.productDetail}</ProductDetailBox>
							<Rating>{'★'.repeat(ratingCount)}</Rating>
							<div>
								<AddToBagBtn onClick={() => setCartCount(cartCount + 1)}>
									Add to bag {targetProduct.price}
								</AddToBagBtn>
							</div>
							<hr />
							<DescriptionSummaryBox>
								{targetProduct.descriptionSummary}
							</DescriptionSummaryBox>
							<div>{targetProduct.description}</div>
						</div>
					</ProductTop>
					<ReviewBox>
						<ReviewTitle>REVIEWS</ReviewTitle>
						<ReviewContents>
							<div>
								<HighlightText>{targetProduct.CommentsCount}</HighlightText>
								<p>Total Reviews</p>
							</div>
							<div>
								<HighlightText>
									{targetProduct.AverageRating}
									<span>{'⭐'.repeat(ratingCount)}</span>
								</HighlightText>
								<div>Average Rating</div>
							</div>
						</ReviewContents>
						<Data data={targetProduct.Comments}>
							<Toolbar>
								<DataSearch />
								<ModalOpenButton onClick={() => handleModalOpen()}>
									WRITE
								</ModalOpenButton>
							</Toolbar>
							<DataTable
								background={{
									// header: 'dark-2',
									body: ['white', 'light-2'],
									footer: { dark: 'light-2', light: 'dark-3' },
								}}
							/>
						</Data>
					</ReviewBox>
				</ContentsBox>
			</>
		)
	}
}

export default DetailProductPage

const ContentsBox = styled.div`
	margin-top: 100px;
	width: 100%;
	z-index: -1;
	font-size: 14px;
`
// 상품 설명 부분
const ProductTop = styled.div`
	height: 600px;
	margin: 50px;
	display: flex;
	justify-content: space-evenly;
`

const ProductImage = styled.img`
	margin-right: 20px;
	width: 485px;
	height: 608px;
`
const ProductNameBox = styled.div`
	font-size: 40px;
	margin-bottom: 30px;
	font-weight: bold;
`
const ProductDetailBox = styled.div`
	font-size: 16px;
	margin-bottom: 20px;
`
const Rating = styled.div`
	font-size: 20px;
`

const AddToBagBtn = styled.button`
	margin-top: 20px;
	margin-bottom: 4px;
	width: 359px;
	height: 40px;
	background-color: #f7f7f7;
	border: none;
	border-right: 0.5px solid black;
	border-bottom: 0.5px solid black;
	:hover {
		border: 1px dashed black;
	}
`
const DescriptionSummaryBox = styled.div`
	font-weight: bold;
	font-size: 16px;
	margin-bottom: 20px;
`

// 상품 리뷰 부분
const ReviewBox = styled.div`
	margin: 50px;
`
const ReviewTitle = styled.h5`
	color: darkgray;
`
const ReviewContents = styled.div`
	width: 300px;
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	p {
		margin-top: 20px;
	}
`

const HighlightText = styled.div`
	margin: 0;
	margin-bottom: 10px;
	padding: 0;
	font-size: 32px;
	letter-spacing: -1px;
	span {
		font-size: 16px;
	}
`

// 리뷰 추가 부분
const ModalOpenButton = styled.button`
	background-color: salmon;
	color: white;
	border: none;
	height: 47.6px;
	width: 100px;
	margin-left: 1100px;
`
