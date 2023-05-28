import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'

const Sets = () => {
	const setsProducts = MockProductsDetail(24, 'food')
	return (
		<Box>
			<ProductContainer>
				<ProductBox>상품1</ProductBox>
				<ProductBox>상품2</ProductBox>
				<ProductBox>상품3</ProductBox>
				<ProductBox>상품4</ProductBox>
			</ProductContainer>
		</Box>
	)
}

export default Sets

const Box = styled.div`
	position: absolute;
	top: 100px;
	width: 100%;
	z-index: -1;
`

const ProductContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`

const ProductBox = styled.div`
	border: solid 1px black;
`
