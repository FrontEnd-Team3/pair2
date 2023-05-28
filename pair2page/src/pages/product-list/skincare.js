import styled from 'styled-components'
import { MockProductsDetail } from '../../data/faker'

const Skincare = () => {
	console.log(MockProductsDetail(2, 'fashion'))
	return (
		<>
			<Box>
				The page for skincare products.
				<img src="img/footer-img.png" />
			</Box>
		</>
	)
}

export default Skincare

const Box = styled.div`
	height: 800px;
`
