import styled from 'styled-components'
const MainTop = () => {
	return (
		<div>
			<ImageContainer>
				<MainImage src="img/main-img2.jpg" />
				<MainTextImage src="img/main-img1.png" />
			</ImageContainer>
		</div>
	)
}

export default MainTop

const ImageContainer = styled.div`
	width: 100%;
`

const MainImage = styled.img`
	width: 100%;
	z-index: 0;
`
const MainTextImage = styled.img`
	width: 100%;
	z-index: 1;
	margin-top: -332px;
`
