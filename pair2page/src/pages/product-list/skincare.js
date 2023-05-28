import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'

const Skincare = () => {
	// @ UI 구현 성공 시 로직 분리 예정
	const skincareProducts = MockProductsDetail(24, 'fashion')
	return (
		<Box>
			<ProductContainer>
				<ProductBox>상품1</ProductBox>
				<ProductBox>상품2</ProductBox>
				<ProductBox>상품3</ProductBox>
				<ProductBox>상품4</ProductBox>
			</ProductContainer>
			<ProductContainer>
				<ProductBox>상품1</ProductBox>
				<ProductBox>상품2</ProductBox>
				<ProductBox>상품3</ProductBox>
				<ProductBox>상품4</ProductBox>
			</ProductContainer>
			<ProductContainer>
				<ProductBox>상품1</ProductBox>
				<ProductBox>상품2</ProductBox>
				<ProductBox>상품3</ProductBox>
				<ProductBox>상품4</ProductBox>
			</ProductContainer>
			<ProductContainer>
				<ProductBox>상품1</ProductBox>
				<ProductBox>상품2</ProductBox>
				<ProductBox>상품3</ProductBox>
				<ProductBox>상품4</ProductBox>
			</ProductContainer>
		</Box>
	)
}

export default Skincare

const Box = styled.div`
	margin-top: -400px;
	width: 100%;
	z-index: -1;
	/* height: auto; */
`

const ProductContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	height: 580px;
`

const ProductBox = styled.div`
	border: solid 1px black;
`
