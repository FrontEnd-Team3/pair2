import { Button } from 'reactstrap'
import styled from 'styled-components'

const Imgbox = () => {
	return (
		<>
			<SubMainImgBox>
				<img src="img/sub-menu-img-skincare.jpg" />
				<img src="img/sub-menu-img-makeup.jpg" />
			</SubMainImgBox>
			<SubMainText>
				<Button>Shop Skincare</Button>
				<Button>Shop Makeup</Button>
			</SubMainText>
		</>
	)
}

export default Imgbox

const SubMainImgBox = styled.div`
	flex-direction: row;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 600px;
	}
`

const SubMainText = styled.div`
	flex-direction: row;
	display: flex;

	justify-content: center;
	align-items: center;
`
