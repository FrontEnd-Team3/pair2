import styled from 'styled-components'
import CarouselBox from '../../components/carousel'
import Imgbox from '../../components/img-box'
import Notice from '../../components/notice'

const MainPage = () => {
	return (
		<>
			<MainImgBox>
				<img src="img/main-img1.png" />
			</MainImgBox>
			<SubMainBox>
				<TextBox>
					<div style={{ marginLeft: '60px', marginRight: '30px' }}>
						SKIN FIRST
					</div>
					<div>MAKEUP SECOND</div>
				</TextBox>
				<Imgbox />
			</SubMainBox>
			<div>
				<VideoBox>
					<video src="img/main-video.mp4" loop autoPlay muted />
				</VideoBox>
			</div>
			<div>
				<TextBox>FEATURED PRODUCTS</TextBox>
				<CarouselBox />
			</div>
			<Notice />
		</>
	)
}

export default MainPage

const MainImgBox = styled.div`

margin-top: 20px;

	background-image: url(../../img/main-img2.jpg);

	background-size: 100%;
	img {
		width: 100%;
		margin-top: 240px;
	}
	div {
        margin: 20px;
		width: 350px;
		background-color: white;
		div {
            
            text-align: center
			font-size: 14px;
			width: 95px;
			height: 40px;
			background-color: pink;
            margin: 0 auto;
            :hover {
                opacity: 0.5
            }
		}
	}
`

const SubMainBox = styled.div`
	margin-top: 20px;
	margin-top: 50px;
`

const TextBox = styled.div`
	margin: 20px 0;
	flex-direction: row;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	font-weight: 200;
`

const SubMainImgBox = styled.div`
	img {
		width: 600px;
	}
`
const SubMainTextBox2 = styled.div``

const VideoBox = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	video {
		width: 900px;
	}
`
