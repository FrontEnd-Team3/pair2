import styled from 'styled-components'
import { useProduct } from '../../context/one-product'

const DetailProductPage = () => {
	const { targetProduct, setTargetProduct } = useProduct()
	if (targetProduct) {
		return (
			<ContentsBox>
				<div>
					<img src={targetProduct.imageURL} />
				</div>
			</ContentsBox>
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
