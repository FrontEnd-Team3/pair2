import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Imgbox = () => {
	const navigate = useNavigate()
	return (
		<>
			<SubMainImgBox>
				<img src="img/sub-menu-img-skincare.jpg" />
				<img src="img/sub-menu-img-makeup.jpg" />
			</SubMainImgBox>
			<SubMainText>
				<MainPageButton onClick={() => navigate('/product/skincare')}>
					Shop Skincare
				</MainPageButton>
				<MainPageButton onClick={() => navigate('/product/makeup')}>
					Shop Makeup
				</MainPageButton>
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
	width: 500px;
	margin-left: 500px;
	flex-direction: row;
	display: flex;
	justify-content: space-around;
	align-items: center;
`

const MainPageButton = styled.button`
	margin-top: 20px;
	width: 200px;
	height: 50px;
	background-color: darkgray;
	border: none;
	color: white;
`
