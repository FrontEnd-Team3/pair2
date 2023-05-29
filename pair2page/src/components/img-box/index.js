import styled from 'styled-components'

const Imgbox = () => {
	return (
		<>
			<SubMainImgBox>
				<img src="img/sub-menu-img-skincare.jpg" />
				<img src="img/sub-menu-img-makeup.jpg" />
			</SubMainImgBox>
			<div>
				<div>Shop Skincare</div>
				<div>Shop Makeup</div>
			</div>
		</>
	)
}

export default Imgbox

const SubMainImgBox = styled.div`
	img {
		width: 600px;
	}
`
