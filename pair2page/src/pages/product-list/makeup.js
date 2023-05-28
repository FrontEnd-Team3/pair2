import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'

const Makeup = () => {
	const makeupProducts = MockProductsDetail(24, 'cats')
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

export default Makeup

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
